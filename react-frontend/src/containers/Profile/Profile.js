import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  const { userdata } = props;
  return <div>Profile</div>;
};

const mapStateToProps = (state) => {
  return { userdata: state.auth.userdata };
};

export default connect(mapStateToProps)(Profile);
