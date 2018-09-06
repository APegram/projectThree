import React from "react";
import { Jumbotron } from "re-pro";
import backgroundGradient from "../../images/gradient1.jpg";
const AnnouncementImage = {
  backgroundImage: `url(${backgroundGradient})`
};
const CareerHeader = props => (
  <div>
    <Jumbotron className="text-white" style={AnnouncementImage}>
      <h1 className="h1-responsive">Welcome to Career Services!</h1>
      <p className="lead">
        "Doubt Kills More Dreams than Failure" —Suzy Kassem
      </p>
      <hr className="my-2" />
      <p>You can find here:</p>
      <ul>
        <li>Employer Ready vs. Employer Competitive Framework</li>
        <li>Your Upcoming Employer Competitive Milestones</li>
        <li>Your Upcoming Career Service Sessions</li>
        <li>Access to the Career Services Library</li>
      </ul>
      <p>
        Remember to check the Announcements to attend any of our weekly online
        Career Service events.
      </p>
    </Jumbotron>
  </div>
);

export default CareerHeader;
