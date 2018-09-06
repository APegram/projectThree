import React from "react";
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

const columnsTwo = [
  {
    dataField: "sessionNum",
    text: "Session Number",
    sort: true
  },
  {
    dataField: "sessionName",
    text: "Session Name",
    sort: true,
    search: true
  },
  {
    dataField: "reason",
    text: "Reason",
    sort: true,
    search: true
  },
  {
    dataField: "status",
    text: "Status",
    sort: true
  }
];

const configTwo = {
  prePageText: "Previous",
  nextPageText: "Next",
  firstPageText: "First",
  lastPageText: "Last",
  alwaysShowAllBtns: true,
  showTotal: true,
  hideSizePerPage: false
};

const columns = [
  {
    dataField: "sessionNum",
    text: "Session Number",
    sort: true
  },
  {
    dataField: "sessionName",
    text: "Session Name",
    sort: true,
    search: true
  },
  {
    dataField: "presence",
    text: "Status",
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

class AttendancePage extends React.Component {

  state = {
    loaded: false,
    data: [],
    dataTwo: []
  }

  componentDidMount() {
    API.getUserAttendance(localStorage.id, data => {
        console.log(data)
        this.setState({
            loaded: true,
            data: data.attendance,
            early: data.attendance.filter(item => item.presence === "early").length,
            present: data.attendance.filter(item => item.presence === "present").length,
            late: data.attendance.filter(item => item.presence === "late").length,
            excused: data.attendance.filter(item => item.presence === "excused").length,
            pending: data.attendance.filter(item => item.presence === "pending").length,
            absent: data.attendance.filter(item => item.presence === "absent").length,
            dataTwo: data.requests
        });
    });
  }

  render() {
    return (
      <Container className="mt-3">
        <Row className="py-3">
          <Col md="12">
            {this.state.loaded ? <Card>
              <CardHeader
                tag="h3"
                className="aqua-gradient text-center font-weight-bold text-white py-4"
              >
                Attendance
              </CardHeader>
              <CardBody>
                  <ThreePanelGroup
                    titleOne="Early"
                    textOne={this.state.early}
                    titleTwo="Present"
                    textTwo={this.state.present}
                    titleThree="Late"
                    textThree={this.state.late}
                  />
                  <ThreePanelGroup
                    titleOne="Excused"
                    textOne={this.state.excused}
                    titleTwo="Pending"
                    textTwo={this.state.pending}
                    titleThree="Absent"
                    textThree={this.state.absent}
                  />
                <br/>
                <h3>Absence Requests</h3>
                <ProfileDataTable
                  keyField="id"
                  data={this.state.dataTwo}
                  columns={columnsTwo}
                  config={configTwo}
                  striped
                  search
                  pagination
                />
                <br/>
                <h3>Attendance History</h3>
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
            </Card> : <div className="container-fluid text-center mt-5" style={{height: "100vh"}}><Spinner className="mx-auto" big crazy multicolor /> </div>}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AttendancePage;
