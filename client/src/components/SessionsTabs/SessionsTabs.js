import React from "react";
import {
  Container,
  TabPane,
  TabContent,
  Nav,
  NavItem,
  NavLink
} from "re-pro";
import classnames from "classnames";
import { UpcomingSession } from "../../uncccode";
import CLT2 from "../../images/clt2.jpeg";
import CLT3 from "../../images/clt3.jpeg";
import CLT4 from "../../images/clt4.jpeg";
import CLTC from "../../images/cltcelebration.jpeg";
import UNCCCE1 from "../../images/unccce1.jpeg";

class TabsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemPills: "1"
    };
    this.togglePills = this.togglePills.bind(this);
  }

  togglePills(tab) {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  }

  render() {
    const tabPaneContainer = {
      maxWidth: "60%"
    };
    return (
      <Container className="mt-4">
        <Nav pills color="cyan" className="nav-justified ">
          <NavItem>
            <NavLink
              to="#"
              className={classnames({
                active: this.state.activeItemPills === "1"
              })}
              onClick={() => {
                this.togglePills("1");
              }}
            >
              Session One
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              className={classnames({
                active: this.state.activeItemPills === "2"
              })}
              onClick={() => {
                this.togglePills("2");
              }}
            >
              Session Two
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              className={classnames({
                active: this.state.activeItemPills === "3"
              })}
              onClick={() => {
                this.togglePills("3");
              }}
            >
              Session Three
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              className={classnames({
                active: this.state.activeItemPills === "4"
              })}
              onClick={() => {
                this.togglePills("4");
              }}
            >
              Session Four
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              className={classnames({
                active: this.state.activeItemPills === "5"
              })}
              onClick={() => {
                this.togglePills("5");
              }}
            >
              Session Five
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeItem={this.state.activeItemPills}>
          <TabPane tabId="1">
            <Container style={tabPaneContainer}>
              <UpcomingSession
                sessionImage={UNCCCE1}
                sessionDate="Monday, August 27 10:00AM - 2:30PM EDT"
                sessionTitle="A Node To Server Side Programming"
                sessionDescription="An introduction to Node.js."
                sessionLink="/sessions/A Node To Server Side Programming"
              />
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Container style={tabPaneContainer}>
              <UpcomingSession
                sessionImage={CLT3}
                sessionDate="Tuesday, August 28 10:00AM - 2:30PM EDT"
                sessionTitle="Node Another Day of JavaScript!"
                sessionDescription="This session teaches the fundamentals of Node."
                sessionLink="/sessions/Node Another Day of JavaScript!"
              />
            </Container>
          </TabPane>
          <TabPane tabId="3">
            <Container style={tabPaneContainer}>
              <UpcomingSession
                sessionImage={CLT4}
                sessionDate="Wednesday, August 29 10:00AM - 2:30PM EDT"
                sessionTitle="Node A Thing Will Slow You Down"
                sessionDescription="This session goes over how to use Node to host a server locally."
                sessionLink="/sessions/Node A Thing Will Slow You Down"
              />
            </Container>
          </TabPane>
          <TabPane tabId="4">
            <Container style={tabPaneContainer}>
              <UpcomingSession
                sessionImage={CLTC}
                sessionDate="Thursday, August 30 10:00AM - 2:30PM EDT"
                sessionTitle="Mastering The JavaScript"
                sessionDescription="This session is designed to help you master the fundamentals of JavaScript."
                sessionLink="/sessions/Mastering The JavaScript"
              />
            </Container>
          </TabPane>
          <TabPane tabId="5">
            <Container style={tabPaneContainer}>
              <UpcomingSession
                sessionImage={CLT2}
                sessionDate="Friday, August 31 10:00AM - 2:30PM EDT"
                sessionTitle="It's MySQL Not YourSQL"
                sessionDescription="An introduction to the second database structure in this course: MySQL."
                sessionLink="/sessions/Its MySQL Not YourSQL"
              />
            </Container>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default TabsPage;
