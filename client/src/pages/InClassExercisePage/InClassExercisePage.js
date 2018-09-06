import React from "react";
import { Card, CardBody, Container } from "re-pro";

const WallPage = props => {
  return (
    <Container style={{height: "70vh"}}>
        <Card className="sunny-morning-gradient">
          <CardBody>
            <article>
              <h2>
                Final Project Presentations
              </h2>
              <ul>
                <li>
                  The time is here! Bring your A-Game and knock it out of the park!
                </li>
              </ul>
              <h2>Instructions</h2>
              <ul>
                <li>
                  <p>
                    Code some codez
                  </p>
                  <ul>
                    <li>
                      Lots of codez
                    </li>
                  </ul>
                </li>
                <br/>
                <li>
                  <p>
                    Code some more codez
                  </p>
                </li>
                <li>
                  <p>
                    Seriously, <strong>moar</strong> codez
                  </p>
                </li>
                <li>
                  <p><strong>Show</strong> some codez</p>
                  <ul>
                    <li>Why you code?</li>
                    <li>What you code?</li>
                    <li>Why we should like your code?</li>
                  </ul>
                </li>
                <br/>
                <li>
                  <p>
                    <strong>Wow</strong>, nice codez.
                  </p>
                </li>
              </ul>
            </article>
          </CardBody>
        </Card>
    </Container>
  );
};

export default WallPage;
