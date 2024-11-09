import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Made a Tic-Tac-Toe game using Python's Tkinter library for two players to play on a 3x3 grid.
Added features to check win, tie, and random starting player, with clear turn display and color codes for each player."
              ghLink="https://github.com/renishhh"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie Ticket & Seating Management System"
              description="Created a simple movie ticket and seating management system using C where users can see available seats and book their desired seat."
              ghLink="https://github.com/renishhh"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Stock Portfolio Management System"
              description="Developed a Stock Portfolio Management application made using netbeans GUI builder, java and JDBC.
It enables users to buy, sell stocks and view their Portfolio."
              ghLink="https://github.com/renishhh"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-notice Board"
              description="Created an E-Notice Board using HTML, CSS, JavaScript, Express.js, and MySQL for online notice display.
Connected the system to MySQL for storing and showing notices easily and quickl"
              ghLink="https://github.com/renishhh"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Fresh Fold"
              description="
Fresh Fold is a laundry service dedicated to SIT Pune hostel residents, offering washing, ironing, and shoe-cleaning with an easy-to-use website. Users can order services, track pickups, and opt for express or standard delivery, while laundrymen manage orders efficiently."
              ghLink="https://github.com/renishhh"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
