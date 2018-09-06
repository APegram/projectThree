import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "re-pro";
import Team from "../../images/team.jpeg";

class UpcomingCareerSession extends Component {
  render() {
    const {
      sessionDate,
      sessionTitle,
      sessionDescription,
      sessionLink
    } = this.props;
    return (
      <Card>
        <CardImage className="img-fluid" src={Team} waves />
        <CardHeader>
          <CardText small muted>
            {sessionDate}
          </CardText>
        </CardHeader>
        <CardBody>
          <CardTitle>{sessionTitle}</CardTitle>
          <CardText>{sessionDescription}</CardText>
          <Link to={`${sessionLink}`}>
            <Button block gradient="peach" className="my-1" size="sm">
              Session Details
            </Button>
          </Link>
          <Link to="/campus">
          <Button block gradient="peach" className="my-1" size="sm" href="#">
            Campus
          </Button>
          </Link>
        </CardBody>
      </Card>
    );
  }
}

export default UpcomingCareerSession;
