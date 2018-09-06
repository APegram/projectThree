import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage,
  CardTitle,
  CardText
} from "re-pro";
import { ClassCheckInButtons } from "../../uncccode";

class UpcomingSession extends Component {
  render() {
    const {
      sessionImage,
      sessionDate,
      sessionTitle,
      sessionDescription,
      sessionLink,
      inSession,
      sessionAttendance
    } = this.props;
    return (
      <Card>
        <CardImage className="img-fluid" src={sessionImage} waves />
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
        <CardFooter>
          <ClassCheckInButtons
            inSession={inSession}
            sessionAttendance={sessionAttendance}
            buttonColor="amber"
            outline
            block
          />
        </CardFooter>
      </Card>
    );
  }
}

export default UpcomingSession;
