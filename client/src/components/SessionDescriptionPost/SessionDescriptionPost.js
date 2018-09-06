import React from "react";
import { Row, Col, Fa } from "re-pro";

const SessionDescriptionPost = props => {
  return (
    <Row>
      <Col lg="7">
        <Row className="mb-3">
          <Col md="1" size="2">
            <Fa icon="video-camera" size="2x" className="cyan-text" />
          </Col>
          <Col md="11" size="10">
            <h5 className="font-weight-bold mb-3">Panopto</h5>
            <p className="grey-text">
              View this session's in-class recording here, or click the arrow to
              open the video in a new tab.
            </p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="1" size="2">
            <Fa icon="code" size="2x" className="red-text" />
          </Col>
          <Col md="11" size="10">
            <h5 className="font-weight-bold mb-3">In-class Exercises</h5>
            <p className="grey-text">In class exercises populated here</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="1" size="2">
            <Fa icon="file-code-o" size="2x" className="deep-purple-text" />
          </Col>
          <Col md="11" size="10">
            <h5 className="font-weight-bold mb-3">Resources</h5>
            <p className="grey-text">Additional resources populated here</p>
          </Col>
        </Row>
      </Col>
      <Col lg="5">
        <iframe
          src={props.sessionVideo}
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          title={`${props.sessionTitle} video`}
          allowFullScreen
        />
      </Col>
    </Row>
  );
};

export default SessionDescriptionPost;
