import React from "react";
import { Row, Col, Fa } from "re-pro";

const CourseworkDescription = props => {
  return (
    <Row>
      <Col lg="5" className="mb-lg-0 mb-5">
        <img
          src={props.courseworkImage}
          alt={props.courseworkTitle}
          className="img-fluid rounded z-depth-1"
        />
      </Col>
      <Col lg="7">
        <Row className="mb-3">
          <Col md="1" size="2">
            <Fa icon="calendar" size="2x" className="indigo-text" />
          </Col>
          <Col md="11" size="10">
            <h5 className="font-weight-bold mb-3">Due Date</h5>
            <p>{props.courseworkDate}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="1" size="2">
            <Fa icon="info" size="2x" className="pink-text" />
          </Col>
          <Col md="11" size="10">
            <h5 className="font-weight-bold mb-3">Assignment Information</h5>
            <p>{props.courseworkDetailed}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="1" size="2">
            <Fa icon="smile-o" size="2x" className="blue-text" />
          </Col>
          <Col md="11" size="10">
            <h5 className="font-weight-bold mb-3">Instructions</h5>
            <ul>
            {props.courseworkInstructions.map(instruction => (
              <li>{instruction.text}</li>
            ))}
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CourseworkDescription;
