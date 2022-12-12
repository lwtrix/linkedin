import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LeftSideBar } from "./LeftSideBar";
import { MainContent } from "./MainContent";
import { NewsSidebar } from "./NewsSidebar";

const Homepage = () => {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <LeftSideBar />
        </Col>
        <Col xs={5}>
          <MainContent />
        </Col>
        <Col xs={4}>
          <NewsSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
