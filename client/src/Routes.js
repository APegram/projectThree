import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import {
  CampusPage,
  StudentProfilePage,
  CareerServicesPage,
  ClassContactsPage,
  CourseWorkPage,
  GradesPage,
  InClassExercisePage,
  AttendancePage,
  SessionDescriptionPage,
  CourseworkDescriptionPage,
  SessionsPage,
  RegisterPage,
  SignInPage,
  VideoLibraryPage,
  WallPage
} from "./uncccode";

class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Login and Root(Home Page) */}
        <PrivateRoute
          exact
          path="/"
          component={WallPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/campus"
          component={CampusPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/studentprofile"
          component={StudentProfilePage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/classcontacts"
          component={ClassContactsPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/career"
          component={CareerServicesPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/grades"
          component={GradesPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/attendance"
          component={AttendancePage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/wall"
          component={WallPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/inclass"
          component={InClassExercisePage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/sessions/session"
          component={SessionDescriptionPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/sessions"
          component={SessionsPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/coursework"
          component={CourseWorkPage}
          isAuth={this.props.isAuth}
        />
        <PrivateRoute
          exact
          path="/videos"
          component={VideoLibraryPage}
          isAuth={this.props.isAuth}
        />
        <Route
          path="/sessions/:name"
          render={props => <SessionDescriptionPage match={props.match} />}
        />
        <Route
          path="/coursework/:name"
          render={props => <CourseworkDescriptionPage match={props.match} />}
        />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/register",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default Routes;
