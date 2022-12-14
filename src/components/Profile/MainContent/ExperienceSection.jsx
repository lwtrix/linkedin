import React, { useEffect, useState } from "react";
import "../../css/profile/Experience/experience-section.css";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Experience } from "./Experience/Experience";
import { AddExperienceModal } from "./Experience/AddExperienceModal";

export const ExperienceSection = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const [experiences, setExperiences] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleClose = () => setShowAddModal(false);
  const handleShow = () => setShowAddModal(true);

  const getExperiences = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };
    if (user) {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences`,
        options
      );
      const data = await res.json();

      setExperiences(data);
    }
  };

  useEffect(() => {
    getExperiences();
  }, [user]);

  return (
    <div className="experience-section">
      <h3>Experience</h3>
      <div className="controls">
        <div className="icon-container">
          <AiOutlinePlus className="icon" onClick={handleShow} />
        </div>
        <div className="icon-container">
          <FiEdit2
            className="icon"
            onClick={(e) => navigate("/profile/experiences")}
          />
        </div>
      </div>
      {experiences.map((exp) => (
        <Experience key={exp._id} experience={exp} />
      ))}
      <AddExperienceModal
        refreshExperiences={getExperiences}
        user={user}
        handleClose={handleClose}
        show={showAddModal}
      />
    </div>
  );
};
