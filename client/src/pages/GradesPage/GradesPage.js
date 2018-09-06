import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Spinner
} from "re-pro";
import { ProfileDataTable, ThreePanelGroup } from "../../uncccode";
import API from "../../utils/db";
import { calcAverage } from "../../utils/functions";

const columns = [
  {
    dataField: "assignmentNum",
    text: "Assignment Number",
    sort: true
  },
  {
    dataField: "assignmentName",
    text: "Assignment Name",
    sort: true,
    search: true
  },
  {
    dataField: "status",
    text: "Status",
    sort: true
  },
  {
    dataField: "grade",
    text: "Grade",
    sort: true
  }
];

const config = {
  prePageText: "Previous",
  nextPageText: "Next",
  firstPageText: "First",
  lastPageText: "Last",
  alwaysShowAllBtns: true,
  showTotal: true,
  hideSizePerPage: false
};

class GradesPage extends Component {

  state = {
    data: {},
    grades: [],
    average: "",
    submitted: 0,
    total: 16,
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
        total: 16,
        loaded: true
      });
    });
  }

  render() {
    return (
      <Container className="mt-3">
        <Row className="py-3">
          <Col md="12">
            {this.state.loaded ? (
              <Card>
                <CardHeader
                  tag="h3"
                  className="peach-gradient text-center font-weight-bold text-white py-4"
                >
                  Grades
                </CardHeader>
                <CardBody>
                  <ThreePanelGroup
                    titleOne="Average Academic"
                    textOne={this.state.average}
                    textOneColor="green-text"
                    titleTwo="Submitted"
                    textTwo={this.state.submitted}
                    titleThree="Unsubmitted"
                    textThree={this.state.total - this.state.submitted}
                    textThreeColor="red-text"
                  />
                  <ProfileDataTable
                    keyField="id"
                    data={this.state.data}
                    columns={columns}
                    config={config}
                    striped
                    search
                    pagination
                  />
                </CardBody>
              </Card>
            ) : (
              <div
                className="container-fluid text-center mt-5"
                style={{ height: "100vh" }}
              >
                <Spinner className="mx-auto" big crazy multicolor />{" "}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GradesPage;
