import React from "react";
import { Fa } from "re-pro";
import { OneClickButton } from "../../uncccode"

const SocialSignInButton = props => (
  <OneClickButton onClick={props.onClick} block size="sm" className="purple-gradient my-2">
    <a className="p-2 m-2">
      Sign in with {props.socialName}{" "}
      <Fa icon={props.socialName} className="white-text" />
    </a>
  </OneClickButton>
);

export default SocialSignInButton;
