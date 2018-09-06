import React from "react";
import { Fa } from "re-pro";

const AssignmentSubmissionLink = props => {
  return (
    <div>
      <span role="button" onClick={() => props.handleRemoveLink(props.id)}>
        <Fa icon="times" style={{color: "red"}} />
      </span>
      <span key={props.id}>
      {"  "}
        {props.name.includes("github") ? (
          <Fa icon="github" />
        ) : props.name.includes("heroku") ? (
          <Fa icon="server" className="secondary-ic" />
        ) : (
          <Fa icon="link" />
        )}
        <a key={props.id} href={props.name} target="_blank">
          {"  "}
          {props.name}
        </a>
      </span>
    </div>
  );
};

export default AssignmentSubmissionLink;
