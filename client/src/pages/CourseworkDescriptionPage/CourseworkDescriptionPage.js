import React, { Component } from "react";
import {
  Container,
  Spinner
} from "re-pro";
import { CourseworkDescriptionContainer } from "../../uncccode";
import UNCCCE2 from "../../images/unccce2.jpeg";
import API from "../../utils/db";

class CourseworkDescriptionPage extends Component {
  state = {
    data: {},
    loaded: false
  };

  componentWillMount() {
    console.log(this.props.match.params.name);
    API.getCoursework(this.props.match.params.name, data => {
      console.log(data);
      this.setState({
        loaded: true,
        data: data[0]
      });
    });
  }
  render() {
    return (
      <Container className="text-white">
        {this.state.loaded ? (
          <CourseworkDescriptionContainer
            courseworkImage={UNCCCE2}
            courseworkDate={this.state.data.dueDate}
            courseworkTitle={this.state.data.name}
            courseworkDetailed={this.state.data.description}
            courseworkInstructions={this.state.data.instructions}
          />
        ) : (
            <div className="container-fluid text-center mt-5" style={{ height: "100vh" }}>
              <Spinner className="mx-auto" big crazy multicolor />
            </div>
          )}
      </Container>
    );
  }
}

export default CourseworkDescriptionPage;
