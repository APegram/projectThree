import React from "react";
import { Container } from "re-pro";
import { SessionDescriptionPre, SessionDescriptionPost } from "../../uncccode";

const SessionDescriptionContainer = props => {
  return (
    <Container className="text-white">
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          {props.sessionTitle}
        </h2>
        <p className="w-responsive text-center mx-auto mb-5">
          {props.sessionDescription}
        </p>
        <SessionDescriptionPre
          sessionImage={props.sessionImage}
          sessionTitle={props.sessionTitle}
          sessionDate={props.sessionDate}
          sessionDetailed={props.sessionDetailed}
          inSession={props.inSession}
          career={props.career}
          sessionAttendance={props.sessionAttendance}
        />
        <hr className="my-5" />
        {!props.career ? (
          <SessionDescriptionPost
            sessionVideo={props.sessionVideo}
            sessionTitle={props.sessionTitle}
          />
        ) : (
            null
          )}
      </section>
    </Container>
  );
};

export default SessionDescriptionContainer;
