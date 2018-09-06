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
  CardText,
  Input
} from "re-pro";
import "./SignInPage.css";
import { OneClickButton, SocialSignInButton } from "../../uncccode";
import API from "../../utils/API";
import Auth from "../../modules/Auth";

class SignInPage extends Component {
  state = {
    email: "",
    password: "",
    fireRedirect: false
  };

  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  handleKeyUpEvent = event => {
    if (event.keyCode === 13) 
    {
      this.handleFormSubmit(event)
    }
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ fireRedirect: false });
    if (this.state.email && this.state.password) {
      API.verifyUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          Auth.authenticateUser(res.data.token, res.data.user);
          this.setState({ email: "", password: "", fireRedirect: true });
        })
        .catch(err => console.log(err));
    }
  };

  googleLogin = () => {
    console.log("Logging in with Google")
    API.googleLogin();
  }

  render() {
    const { fireRedirect } = this.state;

    return (
      <div id="classicformpage">
        <View>
          <Mask className="d-flex justify-content-center align-items-center gradient">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">
                    Sign in to UNCC Code{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Sign in to access your student portal using your email, or with your Google, Facebook, or  GitHub account. If you do not yet have an account, click below to register for your cohort!
                  </h6>
                  <Link to="/register">
                    <Button outline color="white">
                      Register for your cohort
                    </Button>
                  </Link>
                </div>
                <Col md="6" xl="5" className="mb-4">
                  <Card id="classic-card">
                    <CardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <Fa icon="user" /> Sign In:
                      </h3>
                      <hr className="hr-light" />
                      <Input
                        className="text-white"
                        label="Email"
                        icon="user"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUpEvent}
                      />
                      <Input
                        className="text-white"
                        label="Password"
                        icon="lock"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        onKeyUp={this.handleKeyUpEvent}
                      />
                      <div className="text-center mt-4 black-text">
                        <OneClickButton
                          onClick={this.handleFormSubmit}
                          className="purple-gradient"
                        >
                          Sign In
                        </OneClickButton>
                        <br />
                        <br />
                        <Row>
                          <Col>
                            <hr className="hr-light" />
                          </Col>
                          <span className="text-white my-1">OR</span>
                          <Col>
                            <hr className="hr-light" />
                          </Col>
                        </Row>
                        <Container>
                          <SocialSignInButton onClick={this.googleLogin} socialName="google" />
                          <SocialSignInButton socialName="facebook" />
                          <SocialSignInButton socialName="github" />
                          <CardText small className="float-right text-white">
                            Forgotten Password?
                          </CardText>
                        </Container>
                        {fireRedirect && <Redirect to="/" />}
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

export default SignInPage;
