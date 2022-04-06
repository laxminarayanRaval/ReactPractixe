import React from "react";

function ShareName(props) {

  return (
    <React.Fragment>
      <p title={props.data.longname}>{props.data.shortname}: {props.data.exchDisp} | {props.data.industry}</p>
      {/* <p>Industry: {props.data.industry}</p> */}
    </React.Fragment>
  );
}

export default ShareName;
