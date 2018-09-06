import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "re-pro";
import { AssignmentSubmissionAccordion } from "../../uncccode";

class AssignmentSubmissionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      assignmentTitle: "Project 3",
      assignmentDetails:
        "This is your final project for the cohort! Knock it out of the park!",
      assignmentDueDate: "Thursday, August 16, 2018 11:59 PM",
      newLink: "",
      links: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmitChange = field => {
    this.setState({
      newLink: field.target.value
    });
  };

  handleAddLink = event => {
    event.stopPropagation();
    this.setState({
      links: [
        ...this.state.links,
        { name: this.state.newLink, id: this.state.newLink }
      ]
    });
  };

  handleRemoveLink = id => {
    const linksMinusOne = this.state.links.filter(link => link.id !== id);
    this.setState({ links: linksMinusOne });
  };
  render() {
    return (
      <Container>
        <Button outline={this.props.outline} gradient={this.props.gradient} color={this.props.buttonColor} onClick={this.toggle}>
          {this.props.buttonText}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" className="workableModal">
          <ModalHeader className="text-white sunny-morning-gradient" toggle={this.toggle}>
            <h1>{this.state.assignmentTitle}</h1>
          </ModalHeader>
          <ModalBody>
                <AssignmentSubmissionAccordion
                assignmentDetails={this.state.assignmentDetails}
                assignmentDueDate={this.state.assignmentDueDate}
                links= {this.state.links}
                handleRemoveLink={this.handleRemoveLink}
                newLink={this.state.newLink}
                handleSubmitChange={this.handleSubmitChange}
                handleAddLink={this.handleAddLink}
                />
          </ModalBody>
          <ModalFooter>
            <Button gradient="purple" onClick={this.toggle}>
              Close
            </Button>{" "}
            <Button gradient="aqua">Submit Coursework</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default AssignmentSubmissionModal;
