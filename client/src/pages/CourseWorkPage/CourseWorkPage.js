import React, { Component } from "react";
import { Card, CardHeader, CardBody, Container, Row, Col } from "re-pro";
import {
  CourseworkCalendar,
  UpcomingSession,
  WallNotification,
} from "../../uncccode";
import UNCCCE2 from "../../images/unccce2.jpeg";

class CourseWorkPage extends Component {
  render() {
    return (
    <Container>
      <Row>
        <Col md="8" lg="8" xl="8">
          <h2 className="text-white">Notifications</h2>
          <WallNotification
            color="young-passion-gradient"
            heading="Overdue"
            subheading="Make sure you turn in your assignment!"
            cardTitle="Homework 15: React"
            cardText="Extended Due Date: Friday, August 3, 2018 11:59 PM"
            buttonText="View assignment"
            updated="3 mins"
          />
          <hr className="my-5" color="white" />2
          <h2 className="text-white">Upcoming Assignments</h2>
          <WallNotification
            color="sunny-morning-gradient"
            heading="Upcoming Assignment"
            subheading="This assignment is required and has not been submitted."
            cardTitle="Project 3"
            cardText="Due Date: Thursday, August 16, 2018 11:59 PM"
            buttonText="View assignment"
            updated="3 mins"
          />
        </Col>
        <Col md="4" lg="4" xl="4">
          <h2 className="text-white">Upcoming Session</h2>
          <UpcomingSession
            sessionImage={UNCCCE2}
            sessionDate="Thursday, August 16 10:00AM - 2:30PM EDT"
            sessionTitle="Final Project Presentations"
            sessionDescription="Final project presentations."
            sessionLink="/sessions/5b745a945aca8a007d6df602"
            inSession
            sessionAttendance="You're checked in as early."
          />
        </Col>
      </Row>
      <br />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardHeader
              tag="h3"
              className="tempting-azure-gradient text-center font-weight-bold text-white py-4"
            >
              All Coursework
            </CardHeader>
            <CardBody>
              <CourseworkCalendar />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    )};
};

export default CourseWorkPage;
