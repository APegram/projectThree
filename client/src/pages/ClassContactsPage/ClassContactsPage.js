import React, { Component } from "react";
import { Container, Col, Row } from "re-pro";
import { ProfileCard } from "../../uncccode";

import JeffHS from "../../images/jeffHSTU.png";
import DoyleHS from "../../images/doyleHSTU.png";
import MorganHS from "../../images/morganHSTU.png";
import MattHS from "../../images/mattHSTU.png";
import RoderickHS from "../../images/roderickHSTU.jpeg";
import CalebHS from "../../images/calebHSTU.jpeg";
import KalimahHS from "../../images/kalimahHSTU.jpeg";
import SteveHS from "../../images/steveHSTU.jpeg";

class ClassContactsPage extends Component {
  render() {
    const colStyle = { maxWidth: "22rem" };
    return (
      <Container>
        <h2 className="text-white">Instructor</h2>
        <Row className="mt-2">
          <Col style={colStyle}>
            <ProfileCard
              headshot={JeffHS}
              fullName="Jeff Hoffman"
              quote="So code, much developer, very React"
              email="jeff@trilogy.edu"
              messageMe
              cardColor="morpheus-den-gradient"
            />
          </Col>
        </Row>
        <br />
        <h2 className="text-white">Teaching Assistants</h2>
        <Row className="mt-2">
          <Col style={colStyle}>
            <ProfileCard
              headshot={MorganHS}
              fullName="Morgan Bradley"
              quote="Wow I can code"
              email="morgan@trilogy.edu"
              messageMe
              cardColor="peach-gradient"
            />
          </Col>
          <Col style={colStyle}>
            <ProfileCard
              headshot={MattHS}
              fullName="Matthew Ames"
              quote="Very TA"
              email="matt@trilogy.edu"
              messageMe
              cardColor="rainy-ashville-gradient"
            />
          </Col>
          <Col style={colStyle}>
            <ProfileCard
              headshot={DoyleHS}
              fullName="Daniel Doyle"
              quote="So much codez"
              email="daniel@trilogy.edu"
              messageMe
              cardColor="purple-gradient"
            />
          </Col>
        </Row>
        <br />
        <h2 className="text-white">Student Support & Career Staff</h2>
        <Row className="mt-2">
          <Col style={colStyle}>
            <ProfileCard
              headshot={RoderickHS}
              fullName="Roderick Brown"
              quote="Reach out anytime! I am here to help!"
              email="rbrown@trilogyed.com"
              messageMe
              cardColor="dusty-grass-gradient"
            />
          </Col>
          <Col style={colStyle}>
            <ProfileCard
              headshot={CalebHS}
              fullName="Caleb Andersh"
              quote="I want to see you succeed! Get in touch!"
              email="candersh@trilogyed.com"
              messageMe
              cardColor="spring-warmth-gradient"
            />
          </Col>
          <Col style={colStyle}>
            <ProfileCard
              headshot={KalimahHS}
              fullName="Kalimah Perry"
              quote="Let's talk! How can I prepare you?"
              email="kperry@trilogyed.com"
              messageMe
              cardColor="deep-blue-gradient"
            />
          </Col>
          <Col style={colStyle}>
            <ProfileCard
              headshot={SteveHS}
              fullName="Steven CaChat"
              quote="Let's make you a developer!"
              email="scachat@uncc.edu"
              messageMe
              cardColor="mean-fruit-gradient"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ClassContactsPage;
