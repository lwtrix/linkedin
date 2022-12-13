import React from "react";
import "../css/homepage/homepage.css";
import { Col, Row } from "react-bootstrap";
import { LeftSideBar } from "./LeftSideBar";
import { MainContent } from "./MainContent";
import { NewsSidebar } from "./NewsSidebar";

const Homepage = () => {
  return (
    <Row className="text-center m-0">
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
  );
};

export default Homepage;
