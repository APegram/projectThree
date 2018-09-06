import React from "react";
import { Col, Container, Row, Footer } from "re-pro";
import RocketLogo from "../../images/bch-rocket-hi-res.png";

class FooterPage extends React.Component {
  render() {
    const RocketLogoStyle = {
      maxHeight: "70px"
    };
    const FooterStyle = { backgroundColor: "#1C2331", color: "#fff" }
    return (
      <Footer className="font-small pt-4 mt-4" style={FooterStyle}>
        <Container fluid className="text-center text-md-left">
          <Row className="text-center text-md-left mt-3 pb-3">
            <Col md="1" lg="1" xl="1" className="mx-auto mt-3" />
            <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                UNCC Code
              </h6>
              <hr className="blue-gradient mb-4 my-0 d-inline-block mx-auto w-100" />
              <p>
                <a
                  href="https://github.com/shodgesio/ProjectThree"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View our project on GitHub!
                </a>
              </p>
              <p>
                <a data-toggle="modal" data-target="#teamModal">
                  Meet the Team
                </a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="6" lg="6" xl="6" className="mx-auto mt-3">
              <img
                src={RocketLogo}
                className="m-auto flex-center"
                style={RocketLogoStyle}
                alt="UNCC Code Logo"
              />
            </Col>
            <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Resources
              </h6>
              <hr className="blue-gradient mb-4 my-0 d-inline-block mx-auto w-100" />
              <p>
                <a
                  href="https://unchar.bootcampcontent.com/The-Coding-Bootcamp/UNCCHAR201805FSF3-FT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitLab
                </a>
              </p>
              <p>
                <a
                  href="https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%227e92cf18-d4c9-4ccc-b193-a8e800fcb2ef%22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Panopto
                </a>
              </p>
              <p>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
              <p>
                <a href="https://heroku.com/" target="_blank" rel="noopener noreferrer">
                  Heroku
                </a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="1" lg="1" xl="1" className="mx-auto mt-3" />
          </Row>
          <hr />
          <Row className="d-flex align-items-center">
            <Col md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.uncccode.com"> UNCCCode.com </a>
              </p>
            </Col>
            <Col md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-gitlab" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-github" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-server" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-video-camera" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterPage;
