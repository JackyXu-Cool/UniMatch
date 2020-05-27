from flask import Flask, jsonify
from helper.formatHelper import formatScore, formatBasic, formatFull
from helper.dataHelper import getData

app = Flask(__name__)
app.secret_key = "00001"

## Get schools by name
@app.route("/schools/byname/score/<string:name>")
def get_score_school_by_name(name):
    row = getData(name, "name")
    return jsonify(formatScore(row))

@app.route("/schools/byname/basic/<string:name>")
def get_basic_school_by_name(name):
    row = getData(name, "name")
    return jsonify(formatBasic(row))

@app.route("/schools/byname/full/<string:name>")
def get_full_school_by_name(name):
    row = getData(name, "name")
    return jsonify(formatFull(row))

## Get schools by OPEID
@app.route("/schools/byid/score/<int:opeid>")
def get_score_school_by_id(opeid):
    row = getData(opeid, "OPEID")
    return jsonify(formatScore(row))

@app.route("/schools/byid/basic/<int:opeid>")
def get_basic_school_by_id(opeid):
    row = getData(opeid, "OPEID")
    return jsonify(formatBasic(row))

@app.route("/schools/byid/full/<int:opeid>")
def get_full_school_by_id(opeid):
    row = getData(opeid, "OPEID")
    return jsonify(formatFull(row))


if __name__ == "__main__":
    app.run(port=5000, debug=True)
