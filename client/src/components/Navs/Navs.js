import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Navbar,
  NavbarNav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fa,
  SideNavLink,
  SideNavCat,
  SideNavNav,
  SideNav
} from "re-pro";
import UNCCLogo from "../../images/uncclogo.png";
import Auth from "../../modules/Auth";
import { ChatModal } from "../../uncccode";

class Navs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
      toggleStateA: false,
      accordion: false,
      collapsed: false,
      fireRedirect: false,
      userName: localStorage.getItem("name")
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onClick0 = this.onClick0.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.handleToggleClickA = this.handleToggleClickA.bind(this);
  }

  signout = () => {
    Auth.deauthenticateUser();
    this.setState({
      fireRedirect: true
    });
  };

  onClick0() {
    let state = "";

    if (this.state.accordion !== 0) {
      state = 0;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state
    });
  }

  onClick1() {
    let state = "";

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state
    });
  }

  onClick2() {
    let state = "";

    if (this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state
    });
  }

  onClick3() {
    let state = "";

    if (this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state
    });
  }

  onClick4() {
    let state = "";

    if (this.state.accordion !== 4) {
      state = 4;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state
    });
  }

  // Slide out buttons event handlers
  handleToggleClickA() {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { fireRedirect } = this.state;
    const isOpenWithButtonA = this.state.toggleStateA;
    const navStyle = { backgroundColor: "#1C2331", color: "#fff" };
    const sideStyle = { backgroundColor: "#1C2331", width: "100%" };
    const mainStyle = {
      margin: "0 auto",
      maxWidth: "90%",
      paddingTop: "5.5rem"
    };
    const button1 = (
      <div
        href="#!"
        onClick={this.handleToggleClickA}
        key="sideNavToggleA"
        style={{
          lineHeight: "32px",
          marginRight: "1em",
          verticalAlign: "middle"
        }}
      >
        <Fa icon="bars" color="white" size="2x" />
      </div>
    );
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };
    return (
      <div className="mt-5">
        <SideNav
          logo={UNCCLogo}
          isOpenWithButton={isOpenWithButtonA}
          breakWidth={1300}
          style={sideStyle}
          hidden
        >
          <li>
            <ul className="social">
              <li>
                <a href="#!">
                  <Fa icon="gitlab" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <Fa icon="github" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <Fa icon="server" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <Fa icon="video-camera" />
                </a>
              </li>
            </ul>
          </li>
          <SideNavNav>
            <SideNavLink to="/wall">
              <Fa icon="envelope-square" className="d-inline-inline" />{" "}
              <div className="d-none d-md-inline">Home</div>
            </SideNavLink>
            <SideNavLink to="/inclass">
              <Fa icon="code" className="d-inline-inline" />{" "}
              <div className="d-none d-md-inline">In-Class Exercise</div>
            </SideNavLink>
            <SideNavCat
              name="My Cohort"
              onClick={this.onClick1}
              isOpen={this.state.accordion === 1}
              icon="leanpub"
            >
              <SideNavLink to="/sessions">Sessions</SideNavLink>
              <SideNavLink to="/coursework">Coursework</SideNavLink>
              <SideNavLink to="/videos">Video Library</SideNavLink>
            </SideNavCat>
            <SideNavCat
              name="My Progress"
              onClick={this.onClick3}
              isOpen={this.state.accordion === 3}
              icon="bolt"
            >
              <SideNavLink to="/grades">Grades</SideNavLink>
              <SideNavLink to="/attendance">Attendance</SideNavLink>
              <SideNavLink to="/studentprofile">Student Profile</SideNavLink>
            </SideNavCat>
            <SideNavCat
              name="Administration"
              onClick={this.onClick2}
              isOpen={this.state.accordion === 2}
              icon="users"
            >
              <SideNavLink to="/campus">Campus</SideNavLink>
              <SideNavLink to="/classcontacts">Class Contacts</SideNavLink>
              <SideNavLink to="/career">Career Services</SideNavLink>
            </SideNavCat>
          </SideNavNav>
        </SideNav>
        <Navbar style={navStyle} dark expand="md" fixed="top">
          <NavbarNav left>
            <NavItem>{button1}</NavItem>
            <NavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
              <strong>UNCC Code</strong>
            </NavItem>
          </NavbarNav>
          <NavbarNav right style={specialCaseNavbarStyles}>
            <NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                  <Fa icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">
                    {this.state.userName}
                  </div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Support</DropdownItem>
                  <DropdownItem onClick={this.signout}>Sign Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
        </Navbar>
        <main style={mainStyle}>
          {fireRedirect && <Redirect to="/signin" />}
        </main>
        <ChatModal
          incNotifCounter={this.incNotifCounter}
          notifCounter={this.state.notifCounter}
        />
      </div>
    );
  }
}

export default Navs;
