import React from "react";
import { Row, Col, Fa } from "re-pro";
import { ClassCheckInButtons } from "../../uncccode";

const SessionDescriptionPre = props => {
  return (
    <Row>
      <Col lg="5" className="mb-lg-0 mb-5">
        <img
          src={props.sessionImage}
          alt={props.sessionTitle}
          className="img-fluid rounded z-depth-1"
        />
      </Col>
      <Col lg="7">
        <Row className="mb-3">
          <Col md="1" size="2">
            <Fa icon="calendar" size="2x" className="indigo-text" />
          </Col>
          <Col md="11" size="10">
            <h5 className="font-weight-bold mb-3">Date</h5>
            <p>{props.sessionDate}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="1" size="2">
            <Fa icon="info" size="2x" className="pink-text" />
          </Col>
          <Col md="11" size="10">
            <h5 className="font-weight-bold mb-3">Session Information</h5>
            <p>{props.sessionDetailed}</p>
          </Col>
        </Row>
        <Row className="mb-3">
          {!props.career ? (
            <Col md="1" size="2">
              <Fa icon="smile-o" size="2x" className="blue-text" />
            </Col>
          ) : (null)}
          {!props.career ? (
            <Col md="11" size="10">
              <h5 className="font-weight-bold mb-3">Attendance</h5>
              <ClassCheckInButtons
                inSession={props.inSession}
                sessionAttendance={props.sessionAttendance}
                buttonColor="cyan"
              />
            </Col>

          ) : (null)}
        </Row>
      </Col>
    </Row>
  );
};

export default SessionDescriptionPre;
