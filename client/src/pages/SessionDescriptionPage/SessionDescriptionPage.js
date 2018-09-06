import React, { Component } from "react";
import {
  Container,
  Spinner
} from "re-pro";
import { SessionDescriptionContainer } from "../../uncccode";
import CLTC from "../../images/cltcelebration.jpeg";
import UNCCCE1 from "../../images/unccce1.jpeg";
import resources from "../../images/resources.jpeg";
import API from "../../utils/db";

class SessionDescriptionPage extends Component {
  state = {
    data: {},
    loaded: false
  };

  componentWillMount() {
    API.getSession(this.props.match.params.name, data => {
      if (data[0].name === "Final Project Presentations") {
        data[0].image = CLTC;
      } else {
        data[0].image = UNCCCE1;
      }
      if (data[0].sessionType === "Career") {
        data[0].image = resources;
        data[0].career = true;
      } else {
        data[0].career = false;
      }
      this.setState({
        loaded: true,
        data: data[0]
      });
    });
  }

  componentDidMount() {
    this.scrollTarget.scrollIntoView({behavior: "smooth"})
  }

  render() {
    return (
      <Container className="text-white">
        <div ref={scrollTarget => { this.scrollTarget = scrollTarget; }} />
        {this.state.loaded ? (
          <SessionDescriptionContainer
            sessionImage={this.state.data.image}
            sessionDate={this.state.data.date}
            sessionTitle={this.state.data.name}
            sessionDetailed={this.state.data.description}
            sessionVideo={this.state.data.videoLink}
            sessionType={this.state.data.sessionType}
            career={this.state.data.career}
            inSession
          />
        ) : (
          <div className="container-fluid text-center" style={{height: "100vh"}}><Spinner className="mx-auto" big crazy multicolor /> </div>
        )}
      </Container>
    );
  }
}

export default SessionDescriptionPage;
