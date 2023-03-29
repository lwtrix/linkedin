import React, { useEffect, useState } from "react";
import "../../css/profile/Experience/experience-section.css";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Experience } from "./Experience/Experience";
import { AddExperienceModal } from "./Experience/AddExperienceModal";

export const ExperienceSection = ({ userId }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const [experiences, setExperiences] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const [isOtherUser, setIsOtherUser] = useState(false);
  const handleClose = () => setShowAddModal(false);
  const handleShow = () => setShowAddModal(true);

  const getExperiences = async (id = user._id) => {
    if (id === user._id) {
      setIsOtherUser(false);
    } else {
      setIsOtherUser(true);
    }
    const baseEndpoint = process.env.REACT_APP_BE_URL

    const res = await fetch(
      `${baseEndpoint}/experiences/63ce67c5b87b8603d6e1fb31`
    );
      const data = await res.json();

      setExperiences(data);
  };

  useEffect(() => {
    if(user) {
    getExperiences(userId);
    }
  }, [userId]);

  return (
    <div className="experience-section">
      <h3>Experience</h3>
      {isOtherUser === false ? (
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
      ) : null}

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
