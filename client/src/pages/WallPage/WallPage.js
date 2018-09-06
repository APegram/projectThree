import React from "react";
import { Container, Row, Col } from "re-pro";
import {
  UpcomingSession,
  WallNotification,
  WallAnnouncement
} from "../../uncccode";
import UNCCCE2 from "../../images/unccce2.jpeg";

const WallPage = props => {
  return (
    <Container>
      <Row>
        <Col md="8" lg="8" xl="8">
          <h2 className="text-white">Announcements</h2>
          <WallAnnouncement
            heading="Demo Day Invite"
            subheading="Academic Announcement"
            cardText="In order to participate you need to fill one of these out. https://unccpdd083018.splashthat.com/ In the form: Program = Coding Group = Either the Name or individual - You could just put Group if you don't have a name"
          />
          <hr className="my-5" color="white" />
          <h2 className="text-white">Notifications</h2>
          <WallNotification
            color="morpheus-den-gradient"
            heading="Assignment Due"
            subheading="Make sure you turn in your assignment!"
            cardTitle="Project 3"
            cardText="Due Date: Tuesday, August 16, 2018 11:59 PM"
            buttonText="View assignment"
            updated="2 weeks"
          />
          <WallNotification
            color="young-passion-gradient"
            heading="Overdue"
            subheading="Make sure you turn in your assignment!"
            cardTitle="Homework 16: React #2"
            cardText="Due Date: Monday, August 6, 2018 11:59 PM"
            buttonText="View assignment"
            updated="2 weeks"
          />
          <WallNotification
            color="rainy-ashville-gradient"
            heading="Career Session Reminder"
            subheading="You have a career session coming up!"
            cardTitle="Session Career Workshop Behavorial Interview Practice"
            cardText="Tuesday August 14, 2018 from 6:30 PM to 8:00 PM (EDT)"
            buttonText="View session information"
            updated="2 weeks"
          />
          <WallNotification
            color="tempting-azure-gradient"
            heading="Assignment Comment"
            subheading="Your TA has commented on your assignment."
            cardTitle="Project 2"
            cardText="Morgan Bradley commented on August 1st, 10:36 am"
            buttonText="View comments"
            updated="2 weeks"
          />
          <WallNotification
            color="winter-neva-gradient"
            heading="Absence Request"
            subheading="Your absence request has been updated."
            cardTitle="Your absence request has been approved."
            cardText="July 13, 2018: Sequelizing JavaScript"
            buttonText="View request details"
            updated="1 month"
          />
        </Col>
        <Col md="4" lg="4" xl="4">
          <h2 className="text-white">Upcoming Session</h2>
          <UpcomingSession
            sessionImage={UNCCCE2}
            sessionDate="Friday, August 31 10:00AM - 2:30PM EDT"
            sessionTitle="It's MySQL Not YourSQL"
            sessionDescription="An introduction to the second database structure in this course: MySQL."
            sessionLink="/sessions/Its MySQL Not YourSQL"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WallPage;
