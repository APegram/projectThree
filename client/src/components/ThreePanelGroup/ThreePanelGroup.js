import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardGroup,
  CardTitle
} from "re-pro";

const ThreePanelGroup = props => (
  <CardGroup>
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="text-center">
          {props.titleOne}
        </CardTitle>
        <div className="text-center">
          <h5 className={props.textOneColor}>
            <strong>{props.textOne}</strong>
          </h5>
        </div>
        <CardText small muted>
          Last updated 3 mins ago
        </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="text-center">
          {props.titleTwo}
        </CardTitle>
        <div className="text-center">
          <h5 className={props.textTwoColor}>
            <strong>{props.textTwo}</strong>
          </h5>
        </div>
        <CardText small muted>
          Last updated 3 mins ago
        </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h5" className="text-center">
          {props.titleThree}
        </CardTitle>
        <div className="text-center">
          <h5 className={props.textThreeColor}>
            <strong>{props.textThree}</strong>
          </h5>
        </div>
        <CardText small muted>
          Last updated 3 mins ago
        </CardText>
      </CardBody>
    </Card>
  </CardGroup>
);

export default ThreePanelGroup;
