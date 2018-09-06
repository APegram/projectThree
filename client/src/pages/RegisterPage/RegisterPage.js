import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Mask,
  Row,
  Col,
  Fa,
  Button,
  View,
  Container,
  Card,
  CardBody,
  Input
} from "re-pro";
import "./RegisterPage.css";
import { OneClickButton, SocialSignInButton } from "../../uncccode";
import API from "../../utils/API";

class RegisterPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    checkPassword: "",
    fireRedirect: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

   
  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password &&
      this.state.password === this.state.checkPassword
    ) {
      API.createUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        fullName: this.state.lastName + ", " + this.state.firstName
      })
        .then(res => {
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            checkPassword: "",
            fireRedirect: true
          });
        })
        .catch(err => {
          console.log("this is an " + err);
        });
    }
  };

  handleKeyUpEvent = event => {
    if (event.keyCode === 13) 
    {
      this.handleFormSubmit(event)
    }
  };

  render() {
    const { fireRedirect } = this.state

    return (
      <div id="classicformpage">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up for UNCC Code{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                  Register for access to your cohort using your email, or with an already existing Google, Facebook, or  GitHub account. If you already have an account, click below to sign in to your student portal!
                  </h6>
                  <Link to="signin">
                  <Button outline color="white">
                    Already Have an Account? Sign In
                  </Button>
                  </Link>
                </div>
                <Col md="6" xl="5" className="mb-4">
                  <Card id="classic-card">
                    <CardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <Fa icon="user" /> Register:
                      </h3>
                      <hr className="hr-light" />
                      <Input
                        className="text-white"
                        label="First Name"
                        icon="user"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUpEvent}
                      />
                      <Input
                        className="text-white"
                        label="Last Name"
                        icon="user"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUpEvent}
                      />
                      <Input
                        className="text-white"
                        label="Your email"
                        icon="envelope"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUpEvent}
                      />
                      <Input
                        className="text-white"
                        label="Choose a password"
                        icon="lock"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUpEvent}
                      />
                      <Input
                        className="text-white"
                        label="Verify your password"
                        icon="lock"
                        type="password"
                        name="checkPassword"
                        value={this.state.checkPassword}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUpEvent}
                      />
                      <div className="text-center mt-4 black-text">
                        <OneClickButton
                          onClick={this.handleFormSubmit}
                          className="purple-gradient"
                        >
                          Sign Up
                        </OneClickButton>
                        <Row>
                          <Col>
                            <hr className="hr-light" />
                          </Col>
                          <span className="text-white my-1">OR</span>
                          <Col>
                            <hr className="hr-light" />
                          </Col>
                        </Row>
                        <SocialSignInButton socialName="google" />
                        <SocialSignInButton socialName="facebook" />
                        <SocialSignInButton socialName="github" />
                        { fireRedirect && (
                          <Redirect to="signin"/>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>
      </div>
    );
  }
}

export default RegisterPage;
