import React from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  TabPane,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  Fa
} from "re-pro";
import classnames from "classnames";
import { ThreePanelGroup } from "../../uncccode";
import { calcAverage } from "../../utils/functions";

class StudentProfileTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: "1",
      activeItemPills: "1",
      activeItemVerticalPills: "1",
      activeItemOuterTabs: "1",
      activeItemInnerPills: "1",
      activeItemClassicTabs1: "1",
      activeItemClassicTabs2: "1",
      userData: props.userData,
      loaded: true
    };
  }

  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }
  togglePills(tab) {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  }
  toggleVerticalPills(tab) {
    if (this.state.activeItem3 !== tab) {
      this.setState({
        activeItemVerticalPills: tab
      });
    }
  }
  toggleClassicTabs1(tab) {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  }
  toggleClassicTabs2(tab) {
    if (this.state.activeItemClassicTabs2 !== tab) {
      this.setState({
        activeItemClassicTabs2: tab
      });
    }
  }
  toggleOuterTabs(tab) {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  }
  toggleInnerPills(tab) {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  }

  render() {
    return (
      <div>
        <h2 className="mt-5">Pills within the tabs</h2>
        <Nav tabs className="nav-justified" color="indigo">
          <NavItem>
            <NavLink
              to="#"
              className={classnames({
                active: this.state.activeItemOuterTabs === "1"
              })}
              onClick={() => {
                this.toggleOuterTabs("1");
              }}
              role="tab"
            >
              <Fa icon="user" /> Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              className={classnames({
                active: this.state.activeItemOuterTabs === "2"
              })}
              onClick={() => {
                this.toggleOuterTabs("2");
              }}
              role="tab"
            >
              <Fa icon="file-text-o" /> Billing
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent
          className="card"
          activeItem={this.state.activeItemOuterTabs}
        >
          <TabPane tabId="1" role="tabpanel">
            <Row>
              <Col md="3">
                <Nav pills color="primary" className="flex-column">
                  <NavItem>
                    <NavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemInnerPills === "1"
                      })}
                      onClick={() => {
                        this.toggleInnerPills("1");
                      }}
                    >
                      Grades (Academic)
                      <Fa icon="download" className="ml-2" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemInnerPills === "2"
                      })}
                      onClick={() => {
                        this.toggleInnerPills("2");
                      }}
                    >
                      Grades (Career)
                      <Fa icon="file-text" className="ml-2" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      className={classnames({
                        active: this.state.activeItemInnerPills === "3"
                      })}
                      onClick={() => {
                        this.toggleInnerPills("3");
                      }}
                    >
                      Attendance
                      <Fa icon="address-card" className="ml-2" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="9">
                <TabContent activeItem={this.state.activeItemInnerPills}>
                  <TabPane tabId="1">
                    <CardBody>
                      <CardTitle>Academic Grades</CardTitle>
                      {this.state.loaded && (
                        <ThreePanelGroup
                          titleOne="Average Academic"
                          textOne={calcAverage(
                            this.state.userData.submissions.map(
                              grade => grade.grade
                            )
                          )}
                          textOneColor="green-text"
                          titleTwo="Submitted"
                          textTwo={
                            this.state.userData.submissions.map(
                              grade => grade.grade
                            ).length
                          }
                          titleThree="Unsubmitted"
                          textThree={
                            16 -
                            this.state.userData.submissions.map(
                              grade => grade.grade
                            ).length
                          }
                          textThreeColor="red-text"
                        />
                      )}
                    </CardBody>
                  </TabPane>
                  <TabPane tabId="2">
                    <CardBody>
                      <CardTitle>Career Milestone Grades</CardTitle>
                      {this.state.loaded && (
                        <ThreePanelGroup
                          titleOne="Career Completion"
                          textOne="0%"
                          textOneColor="red-text"
                          titleTwo="Submitted"
                          textTwo="0"
                          titleThree="Unsubmitted"
                          textThree="0"
                        />
                      )}
                    </CardBody>
                  </TabPane>
                  <TabPane tabId="3">
                    <CardBody>
                      <CardTitle>Attendance</CardTitle>
                      {this.state.loaded && (
                        <ThreePanelGroup
                          titleOne="Early"
                          textOne={
                            this.state.userData.attendance.filter(
                              item => item.presence === "early"
                            ).length
                          }
                          titleTwo="Present"
                          textTwo={
                            this.state.userData.attendance.filter(
                              item => item.presence === "present"
                            ).length
                          }
                          titleThree="Late"
                          textThree={
                            this.state.userData.attendance.filter(
                              item => item.presence === "late"
                            ).length
                          }
                        />
                      )}
                      {this.state.loaded && (
                        <ThreePanelGroup
                          titleOne="Excused"
                          textOne={
                            this.state.userData.attendance.filter(
                              item => item.presence === "excused"
                            ).length
                          }
                          titleTwo="Pending"
                          textTwo={
                            this.state.userData.attendance.filter(
                              item => item.presence === "pending"
                            ).length
                          }
                          titleThree="Absent"
                          textThree={
                            this.state.userData.attendance.filter(
                              item => item.presence === "absent"
                            ).length
                          }
                        />
                      )}
                    </CardBody>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2" role="tabpanel">
            <Card>
              <CardBody>
                <CardTitle>Paid Invoices</CardTitle>
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <th>Invoice</th>
                      <th>Description</th>
                      <th>Autocharge</th>
                      <th>Due Date</th>
                      <th>Amount</th>
                    </tr>
                    <tr>
                      <td>INV66376</td>
                      <td>
                        Coding Boot Camp (Early Registration Pricing) - Pay In
                        Full - Deposit
                      </td>
                      <td>No</td>
                      <td>2018-03-14</td>
                      <td>8500.00</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                <Button color="blue" className="float-right">
                  Edit Autocharge Details
                </Button>
              </CardBody>
            </Card>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default StudentProfileTabs;
