import React, { Component } from "react";
import { Container, Col, Row, Spinner } from "re-pro";
import { ProfileCard, StudentProfileTabs } from "../../uncccode";
import API from "../../utils/db";

class StudentProfilePage extends Component {
  state = {
    userData: {},
    loaded: false
  };

  componentWillMount() {
    API.getUserFull(localStorage.id, data => {
      this.setState({
        fullName: data.fullName,
        quote: data.settings.quote,
        cardColor: data.settings.cardColor,
        headshot: data.settings.image,
        email: data.email,
        fullData: data,
        loaded: true
      });
    });
  }
  render() {
    const colStyle = { maxWidth: "22rem" };
    return (
      <Container>
        {this.state.loaded ? (
          <div>
            <h2 className="text-white">My Student Profile</h2>
            <Row className="mt-2">
              <Col style={colStyle}>
                <ProfileCard
                  headshot={this.state.headshot}
                  fullName={this.state.fullName}
                  quote={this.state.quote}
                  email={this.state.email}
                  cardColor="aqua-gradient"
                />
              </Col>
            </Row>
          </div>
        ) : (
          <div
            className="container-fluid text-center mt-5"
            style={{ height: "100vh" }}
          >
            <Spinner className="mx-auto" big crazy multicolor />{" "}
          </div>
        )}
        <Row>
          <Col>
            {this.state.loaded && (
              <StudentProfileTabs userData={this.state.fullData} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StudentProfilePage;
