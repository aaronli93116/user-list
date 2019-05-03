import React from "react";
const Match = props => {
  return props.data === "" ? null : props.data === true ? (
    <i className="glyphicon glyphicon-ok" style={{ color: "green" }} />
  ) : (
    <i className="glyphicon glyphicon-remove" style={{ color: "red" }} />
  );
};

export default Match;
