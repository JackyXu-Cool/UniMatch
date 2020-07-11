import React from "react";
import {
  Chart,
  registerShape,
  Axis,
  Tooltip,
  Interval,
  Interaction,
  Coordinate,
} from "bizcharts";

const sliceNumber = 0.01;

registerShape("interval", "sliceShape", {
  draw(cfg, container) {
    const points = cfg.points;
    let path = [];
    path.push(["M", points[0].x, points[0].y]);
    path.push(["L", points[1].x, points[1].y - sliceNumber]);
    path.push(["L", points[2].x, points[2].y - sliceNumber]);
    path.push(["L", points[3].x, points[3].y]);
    path.push("Z");
    path = this.parsePath(path);
    return container.addShape("path", {
      attrs: {
        fill: cfg.color,
        path: path,
      },
    });
  },
});

const PieChart = (props) => (
  <div>
    <h4>{props.title}</h4>
    <Chart data={props.data} height={300} width={400}>
      <Coordinate type="theta" radius={0.8} innerRadius={0.75} />
      <Axis visible={false} />
      <Tooltip showTitle={false} />
      <Interval
        adjust="stack"
        position="value"
        color="type"
        shape="sliceShape"
      />
      <Interaction type="element-single-selected" />
    </Chart>
  </div>
);

export default PieChart;
