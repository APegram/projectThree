import React, { Component } from "react";
import { Container } from "re-pro";
import {
  AssignmentSubmissionModal,
  CourseworkDescription
} from "../../uncccode";

class CourseworkDescriptionContainer extends Component {
  render() {
    return (
      <Container className="text-white">
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            {this.props.courseworkTitle}
          </h2>
          <p className="w-responsive text-center mx-auto mb-5">
            {this.props.courseworkDescription}
          </p>
          <CourseworkDescription
            courseworkImage={this.props.courseworkImage}
            courseworkTitle={this.props.courseworkTitle}
            courseworkDate={this.props.courseworkDate}
            courseworkDetailed={this.props.courseworkDetailed}
            courseworkInstructions={this.props.courseworkInstructions}
          />
          <hr className="my-5" />
          <div className="text-center">
            <AssignmentSubmissionModal gradient="blue" buttonText="Submit Assignment" />
          </div>
        </section>
      </Container>
    );
  }
}

export default CourseworkDescriptionContainer;
