import React from "react";
import { Card, CardImage, CardBody, CardTitle, CardText } from "re-pro";
import { AssignmentSubmissionModal } from "../../uncccode";

const WallNotification = props => (
  <Card cascade className="my-3">
    <CardImage cascade tag="div">
      <div className={`view gradient-card-header ${props.color}`}>
        <br />
        <h2 className="h2-responsive text-center text-white">
          {props.heading}
        </h2>
        <p className="text-center text-white">{props.subheading}</p>
      </div>
    </CardImage>
    <CardBody cascade>
      <CardTitle>{props.cardTitle}</CardTitle>
      <CardText>{props.cardText}</CardText>
      <AssignmentSubmissionModal outline buttonColor="mdb-color" buttonText="View" />
      <CardText small muted>
        <span className="float-right">Last updated {props.updated} ago</span>
      </CardText>
    </CardBody>
  </Card>
);

export default WallNotification;
