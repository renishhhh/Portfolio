import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Renish Thesiya </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently a student and a Software Developer.
            <br />
            I am pursuing Computer Science Engineering  at SIT
            Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Investing in Stock Market
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Respect Your Work, Work Will Respect You"{" "}
          </p>
          <footer className="blockquote-footer">Renish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
