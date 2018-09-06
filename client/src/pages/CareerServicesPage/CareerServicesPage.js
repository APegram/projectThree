import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "re-pro";
import {
  CareerEventsCalendar,
  CareerHeader,
  CareerResourcesPanel,
  UpcomingCareerSession,
  WallNotification
} from "../../uncccode";

const WallPage = props => {
  return (
    <Container>
      <Row>
        <Col md="8" lg="8" xl="8">
          <CareerHeader />
          <hr className="my-5" color="white" />
          <h2 className="text-white">Notifications</h2>
          <WallNotification
            color="frozen-dreams-gradient"
            heading="Upcoming Milestone"
            subheading="Make sure you turn in your assignment!"
            cardTitle="Milestone 5: Create Professional Materials II"
            cardText="Due Date: Wednesday, August 22, 2018 11:59 PM"
            buttonText="View assignment"
            updated="3 mins"
          />
          <WallNotification
            color="young-passion-gradient"
            heading="Overdue Milestone"
            subheading="Make sure you turn in your assignment!"
            cardTitle="Milestone 4: Prepare for a Successful Interview"
            cardText="Due Date: Wednesday, August 1, 2018 11:59 PM"
            buttonText="View assignment"
            updated="2 weeks"
          />
          <WallNotification
            color="young-passion-gradient"
            heading="Overdue Milestone"
            subheading="Make sure you turn in your assignment!"
            cardTitle="Milestone 3: Build Your Visibility"
            cardText="Due Date: Wednesday, July 18, 2018 11:59 PM"
            buttonText="View assignment"
            updated="1 month"
          />
        </Col>
        <Col md="4" lg="4" xl="4">
          <Row>
            <h2 className="text-white">Upcoming Session</h2>
            <UpcomingCareerSession
              sessionDate="Thursday, September 20 7:00PM - 7:30PM EDT"
              sessionTitle="Career Workshop: Behavioral Interview Practice"
              sessionDescription={`Register Here: https://bi092018.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate.`}
              sessionLink="/sessions/Session Career Workshop Behavorial Interview Practice 4"
            />
          </Row>
          <br />
          <Row>
            <h2 className="text-white">Resources</h2>
            <CareerResourcesPanel
              sessionDate="Thursday, September 20 7:00PM - 7:30PM EDT"
              sessionTitle="Career Workshop: Behavioral Interview Practice"
              sessionDescription={`Register Here: https://bi092018.splashthat.com/ for a Behavioral Interview Practice Workshop session designed to give you practice in mastering non-technical interviews. You will practice answering typical interview questions with your peers in this interactive workshop. Once you sign up, you will receive additional materials to review to help you prepare for this workshop. Successful interviewing takes preparation! Make sure to get the most out of these sessions and come prepared to partcipate.`}
              sessionLink="/sessions"
            />
          </Row>
        </Col>
      </Row>
      <br />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardHeader
              tag="h3"
              className="deep-blue-gradient text-center font-weight-bold text-white py-4"
            >
              All Sessions
            </CardHeader>
            <CardBody>
              <CareerEventsCalendar />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WallPage;
