import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Education() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="text-center" style={{ fontSize: "2.3em", color:"white" }}>
          My <span className="purple">Education</span>
        </h1>
        <p className="text-center" style={{ color: "white" }}>
          My academic journey and achievements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="mb-4">
            <Card className="quote-card-view education-card">
              <Card.Body className="text-center">
                <Card.Title as="h3" style={{ fontSize: "1.7em", fontWeight: "500" }}>
                  Bachelor of Technology in Computer Science and Engineering
                </Card.Title>
                <Card.Subtitle className="mb-3" style={{ color: "#fff", opacity: 0.9 }}>
                  Symbiosis Institute of Technology | 2022-26
                </Card.Subtitle>
                <Card.Text>
                  Relevant coursework:{" "}
                  <span className="purple">OOPS, DBMS, OS, DSA, Computer Networks</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} className="mb-4">
            <Card className="quote-card-view education-card">
              <Card.Body className="text-center">
                <Card.Title as="h3" style={{ fontSize: "1.7em", fontWeight: "500" }}>
                  12th Board (GHSEB)
                </Card.Title>
                <Card.Subtitle className="mb-3" style={{ color: "#fff", opacity: 0.9 }}>
                  Modi School | 2022
                </Card.Subtitle>
                <Card.Text>
                  Achieved <span className="purple">87.79 Percentile</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} className="mb-4">
            <Card className="quote-card-view education-card">
              <Card.Body className="text-center">
                <Card.Title as="h3" style={{ fontSize: "1.7em", fontWeight: "500" }}>
                  10th Board (GSEB)
                </Card.Title>
                <Card.Subtitle className="mb-3" style={{ color: "#fff", opacity: 0.9 }}>
                  JPS School | 2020
                </Card.Subtitle>
                <Card.Text>
                  Achieved <span className="purple">99.77 Percentile</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;