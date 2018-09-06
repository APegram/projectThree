import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { Spinner } from "re-pro";
import "./App.css";
import "./gradients.css";
import { Navs, Footer } from "./uncccode";
import Auth from "./modules/Auth";

class App extends Component {
  state = {
    isAuth: false,
    isLoading: true
  };

  makeNav = () => {
    if (this.state.isAuth) {
      return <Navs />;
    }
  };

  makeFooter = () => {
    if (this.state.isAuth) {
      return <Footer />;
    }
  };

  componentDidMount() {
    Auth.onAuthStateChanged(id => {
      if (id) {
        this.setState({
          isAuth: true,
          isLoading: false
        });
      } else {
        this.setState({
          isAuth: false,
          isLoading: false
        });
      }
    });
    Auth.init();
  }

  render() {
    return this.state.isLoading ? (
      <div className="container-fluid text-center">
        <Spinner className="mx-auto" big crazy multicolor />
      </div>
    ) : (
      <div>
        <Router>
          <div>
            {this.makeNav()}
            <Routes isAuth={this.state.isAuth} />
            {this.makeFooter()}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
