import React, { Component } from "react";
import { Card, CardUp, CardBody, Col } from "re-pro";

class VideoCard extends Component {
  state = {
    cardColor: ""
  };
  componentDidMount() {
    const colors = [
      "purple-gradient",
      "aqua-gradient",
      "peach-gradient",
      "warm-flame-gradient",
      "night-fade-gradient",
      "spring-warmth-gradient",
      "juicy-peach-gradient",
      "young-passion-gradient",
      "lady-lips-gradient",
      "sunny-morning-gradient",
      "rainy-ashville-gradient",
      "frozen-dreams-gradient",
      "winter-neva-gradient",
      "dusty-grass-gradient",
      "tempting-azure-gradient",
      "amy-crisp-gradient",
      "mean-fruit-gradient",
      "deep-blue-gradient",
      "ripe-malinka-gradient",
      "morpheus-den-gradient",
      "near-moon-gradient",
      "blue-gradient"
    ];
    const chosenCardColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      cardColor: chosenCardColor
    });
  }
  render() {
    return (
      <Col md="4" lg="4" xl="4">
      <Card testimonial className="m-1">
        <CardUp className={`${this.state.cardColor} lighten-1 text-white text-center font-weight-bold pt-5`}>
        {this.props.sessionDate}
        </CardUp>
        <CardBody>
          <h5 className="card-title">{this.props.sessionTitle}</h5>
          <hr />
          <iframe
            src={this.props.sessionVideo}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            title={`${this.props.sessionTitle} video`}
            allowFullScreen
          />
        </CardBody>
      </Card>
      </Col>
    );
  }
}

export default VideoCard;
