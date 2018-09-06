import React from "react";
import { Card, CardUp, CardBody, Fa, Avatar, Button } from "re-pro";

const ProfileCard = props => (
  <Card testimonial>
    <CardUp className={`${props.cardColor} lighten-1`} />
    <Avatar className="mx-auto white">
      <img src={props.headshot} alt={props.fullName} />
    </Avatar>
    <CardBody>
      <h4 className="card-title">{props.fullName}</h4>
      <hr />
      <p>
        <Fa icon="quote-left" /> {props.quote}
      </p>
      <p>
        <a href="#">{props.email}</a>
      </p>
      {props.messageMe ? (
        <Button floating gradient="blue" size="sm">
          <Fa icon="comment" />
        </Button>
      ) : null}
    </CardBody>
  </Card>
);

export default ProfileCard;
