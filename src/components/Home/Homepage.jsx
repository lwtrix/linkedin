import React from "react";
import "../css/homepage/homepage.css";
import { Col, Container, Row } from "react-bootstrap";
import { LeftSideBar } from "./LeftSideBar";
import { MainContent } from "./MainContent";
import { NewsSidebar } from "./NewsSidebar";
import { useSelector } from "react-redux";

const Homepage = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <Row className="homepage text-center m-0">
      <Col xs={12} sm={5} md={3}>
        <LeftSideBar />
      </Col>
      <Col xs={12} sm={7} md={5}>
        <MainContent />
      </Col>
      <Col md={4}>
        <NewsSidebar />
      </Col>
    </Row>
  );
};

export default Homepage;
