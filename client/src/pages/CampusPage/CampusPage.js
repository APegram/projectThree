import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Fa,
  Button,
  Input
} from "re-pro";

class CampusPage extends Component {
  render() {
    return (
      <Container>
        <section className="my-5 text-white">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            My Campus
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">UNCC</p>
          <Row>
            <Col lg="5" className="lg-0 mb-4">
              <Card>
                <CardBody>
                  <div className="form-header blue accent-1">
                    <h3 className="mt-2">
                      <Fa icon="envelope" /> Write to us:
                    </h3>
                  </div>
                  <p className="dark-grey-text">
                    You will be contacted by an advisor shortly.
                  </p>
                  <div className="md-form">
                    <Input
                      icon="tag"
                      label="Subject"
                      iconClass="grey-text"
                      type="text"
                      id="form-subject"
                    />
                  </div>
                  <div className="md-form">
                    <Input
                      icon="pencil"
                      label="Message"
                      iconClass="grey-text"
                      type="textarea"
                      id="form-text"
                    />
                  </div>
                  <div className="text-center">
                    <Button color="light-blue">Submit</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="7">
              <div
                id="map-container"
                className="rounded z-depth-1-half map-container"
                style={{ height: "400px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.705150154752!2d-80.83598755818487!3d35.22829622092166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a022d796b3e9%3A0xd66c8aa32aeeed1!2s320+E+9th+St%2C+Charlotte%2C+NC+28202!5e0!3m2!1sen!2sus!4v1533566980057"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  title="Google Maps UNCC Continuing Education"
                />
              </div>
              <br />
              <Row className="text-center">
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="map-marker" />
                  </Button>
                  <p>Charlotte, 28202</p>
                  <p className="mb-md-0">United States</p>
                </Col>
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="phone" />
                  </Button>
                  <p>(704) 601-6030</p>
                  <p className="mb-md-0">Mon - Fri, 8:00am-5:00pm</p>
                </Col>
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="envelope" />
                  </Button>
                  <p>scachat@uncc.edu</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default CampusPage;
