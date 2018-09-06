import React from "react";
import { Button, CardText } from "re-pro";

const ClassCheckInButtons = props => {
  return (
    <div>
      {props.inSession ? (
        !props.sessionAttendance ? (
          <div>
            <Button
              block={props.block}
              outline={props.outline}
              color={props.buttonColor}
              className="my-1"
              size="sm"
              href="#"
            >
              Check in to class
            </Button>
            <Button
              block={props.block}
              outline={props.outline}
              color={props.buttonColor}
              className="my-1"
              size="sm"
              href="#"
            >
              Request Absence
            </Button>
          </div>
        ) : (
          <CardText small muted>
            {props.sessionAttendance}
          </CardText>
        )
      ) : (
        <CardText small muted>
          Check in begins 45 minutes before class.
        </CardText>
      )}
    </div>
  );
};

export default ClassCheckInButtons;
