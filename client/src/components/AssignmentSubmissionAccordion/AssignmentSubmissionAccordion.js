import React, { Component } from "react";
import {
  Container,
  Collapse,
  Card,
  CardBody,
  CollapseHeader,
  Input,
  Fa,
  Media
} from "re-pro";
import { AssignmentSubmissionLink, OneClickButton } from "../../uncccode";
import DoyleHS from "../../images/doyleHSTU.png";
import MorganHS from "../../images/morganHSTU.png";

class AssignmentSubmissionAccordion extends Component {
  constructor(props) {
    super(props);
    this.onClickOne = this.onClickOne.bind(this);
    this.onClickTwo = this.onClickTwo.bind(this);
    this.onClickThree = this.onClickThree.bind(this);

    this.state = {
      accordion: false
    };
  }
  onClickOne() {
    let state = "";

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  onClickTwo() {
    let state = "";

    if (this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  onClickThree() {
    let state = "";

    if (this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  render() {
    return (
      <Container className="accordion mt-5">
        <Card className="mt-3">
          <CollapseHeader onClick={this.onClickOne}>
            Assignment Details
            <i
              className={
                this.state.accordion === 1
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </CollapseHeader>
          <Collapse isOpen={this.state.accordion === 1}>
            <CardBody>
              <h5>{this.props.assignmentDetails}</h5>
              <span>Due Date: {this.props.assignmentDueDate}</span>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CollapseHeader onClick={this.onClickTwo}>
            Assignment Submission
            <i
              className={
                this.state.accordion === 2
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </CollapseHeader>
          <Collapse isOpen={this.state.accordion === 2}>
            <CardBody>
              <Card>
                <Container>
                  <strong>Submitted URLs:</strong>
                  <hr />
                  {this.props.links.length < 1 ? (
                    "You have not submitted any links for your assignment."
                  ) : (
                    <div>
                      {this.props.links.map(link => (
                        <AssignmentSubmissionLink
                          id={link.id}
                          name={link.name}
                          handleRemoveLink={this.props.handleRemoveLink}
                        />
                      ))}
                    </div>
                  )}
                </Container>
              </Card>
              <hr className="my-3" />
              <Container>
                <Input
                  label="Add submission URLs here."
                  value={this.props.newLink}
                  onChange={this.props.handleSubmitChange}
                />
                <OneClickButton
                  gradient="blue"
                  size="sm"
                  onClick={this.props.handleAddLink}
                >
                  <Fa icon="plus" />
                </OneClickButton>
              </Container>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CollapseHeader onClick={this.onClickThree}>
            Assignment Discussion
            <i
              className={
                this.state.accordion === 3
                  ? "fa fa-angle-down rotate-icon"
                  : "fa fa-angle-down"
              }
            />
          </CollapseHeader>
          <Collapse isOpen={this.state.accordion === 3}>
            <CardBody>
              <Input
                type="textarea"
                label="Add any comments for your assignment here."
                rows="4"
              />
              <Media list className="mt-3">
                <Media tag="li">
                  <Media left href="#">
                    <Media
                      object
                      src="https://avatars2.githubusercontent.com/u/37205111?s=460&v=4"
                      alt="Stephen Hodges"
                      style={{maxHeight: "64px"}}
                    />
                  </Media>
                  <Media body>
                    <Media heading>Stephen Hodges</Media>
                    Hey! Can you remind me of which links I need to submit with this assignment? I am feeling super lazy and don't want to close this modal and check out the incredibly convenient student portal which tells me everything I need to know.
                    <br/>
                    <Media>
                      <Media left href="#">
                        <Media
                          object
                          src={MorganHS}
                          alt="Morgan Bradley"
                          style={{maxHeight: "64px"}}
                        />
                      </Media>
                      <Media body>
                        <Media heading>Morgan Bradley</Media>
                        Sure! You need to submit links to your GitHub repository, your deployed Heroku site, and your portfolio!
                      </Media>
                    </Media>
                    <Media>
                      <Media left href="#">
                        <Media
                          object
                          src={DoyleHS}
                          alt="Daniel Doyle"
                          style={{maxHeight: "64px"}}
                        />
                      </Media>
                      <Media body>
                        <Media heading>Daniel Doyle</Media>
                        Make sure you submit the link to your portfolio, or I'll give you a C!
                      </Media>
                    </Media>
                  </Media>
                </Media>
              </Media>
            </CardBody>
          </Collapse>
        </Card>
      </Container>
    );
  }
}

export default AssignmentSubmissionAccordion;
