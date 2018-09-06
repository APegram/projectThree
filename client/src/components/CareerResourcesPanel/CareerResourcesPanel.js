import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "re-pro";
import Resources from "../../images/resources.jpeg";

class CareerResourcesPanel extends Component {
  render() {
    return (
      <Card>
        <CardImage className="img-fluid" src={Resources} waves />
        <CardHeader>
          <CardText small muted>
            Everything you need to be equipped for the hunt.
          </CardText>
        </CardHeader>
        <CardBody>
          <CardTitle>PDF Resources</CardTitle>
          <CardText>Click below to download your resource.</CardText>
            <Button block gradient="blue" className="my-1" size="sm">
              <a
                className="text-white"
                href="https://s3.amazonaws.com/bcs-media-dev/career-services/fullstack/Web+Developer+Employer+Ready+vs.+Employer+Competitive.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Employer Ready vs. Employer Competitive
              </a>
            </Button>
          <Button block gradient="blue" className="my-1" size="sm" href="#">
            <a
              className="text-white"
              href="https://s3.amazonaws.com/bcs-media-dev/career-services/fullstack/Employer+Competitive+Planning+Sheet+_+Web+Development.xlsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Employer Ready Planning Sheet
            </a>
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default CareerResourcesPanel;
