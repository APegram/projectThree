import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "re-pro";
import {
  SessionsEventsCalendar,
  SessionsTabs,
} from "../../uncccode";
import API from "../../utils/db";
import { calcAverage } from "../../utils/functions";

class SessionsPage extends Component {

  state = {
    data: {},
    grades: [],
    average: "",
    submitted: 0,
    total: 10,
    loaded: false
  };

  componentWillMount() {
    API.getUserGrades(localStorage.id, data => {
      const grades = data.submissions.map(grade => grade.grade);
      this.setState({
        data: data.submissions,
        grades: grades,
        average: calcAverage(grades),
        submitted: data.submissions.length,
        total: 10,
        loaded: true
      });
    });
  }
  render() {
    return (
      <Container>
        <h2 className="text-white">This Week's Sessions</h2>
        <SessionsTabs />
        <Row className="py-3">
          <Col md="12">
            <Card>
              <CardHeader
                tag="h3"
                className="amy-crisp-gradient text-center font-weight-bold text-white py-4"
              >
                All Sessions
              </CardHeader>
              <CardBody>
                <SessionsEventsCalendar />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SessionsPage;
