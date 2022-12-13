import React from "react";
import "../../../css/profile/ProfileDetails/profile-information.css";
import { Col, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { ProffesionalBanners } from "./ProffesionalBanners";

import { useState } from "react";
import { useSelector } from "react-redux";
import { EditProfileModal } from "./EditProfileModal";

export const ProfileInformation = () => {
  const { user } = useSelector((state) => state.user);

  const [showEditModal, setShowEditModal] = useState(false);

  const handleClose = () => setShowEditModal(false);
  const handleShow = () => setShowEditModal(true);

  return (
    <>
      {user && (
        <div className="profile-information">
          <div className="images">
            <img
              className="bg-img"
              src={
                "https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
              }
              alt=""
            />
            <img className="profile-img" src={user.image} alt="#" />
          </div>
          <Row className="text-container">
            <div className="edit-btn">
              <FiEdit2 className="edit-icon" onClick={handleShow} />
            </div>
            <Col className="details" xs={8}>
              <h5 className="full-name">{user.name + " " + user.surname}</h5>
              <p className="title">{user.title}</p>
              <p className="location">{user.area}</p>
              <p className="connections">43 connections</p>
              <div className="controls">
                <a href="#" className="open-to">
                  Open to
                </a>
                <a href="#" className="add-section">
                  Add profile section
                </a>
                <a href="#" className="more">
                  More
                </a>
              </div>
            </Col>
            <Col xs={4} className="education">
              Education
            </Col>
          </Row>

          <ProffesionalBanners />
          <EditProfileModal
            user={user}
            show={showEditModal}
            handleClose={handleClose}
          />
        </div>
      )}
    </>
  );
};
