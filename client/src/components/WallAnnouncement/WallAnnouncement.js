import React from "react";
import { Button, Jumbotron, Fa } from "re-pro";
import backgroundGradient from "../../images/gradient1.jpg";
const AnnouncementImage = {
  backgroundImage: `url(${backgroundGradient})`
};
const WallAnnouncement = props => (
  <div>
    <Jumbotron className="text-white" style={AnnouncementImage}>
      <h1 className="h1-responsive">{props.heading}</h1>
      <p className="lead">{props.subheading}</p>
      <hr className="my-2" />
      <p>{props.cardText}</p>
      <div className="text-center">
        <Button outline rounded color="white" size="lg">
          <Fa icon="clone" /> View Announcement
        </Button>
      </div>
    </Jumbotron>
  </div>
);

export default WallAnnouncement;
