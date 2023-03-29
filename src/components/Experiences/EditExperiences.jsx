import React from "react";
import "../css/profile/Experience/edit-experience.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Experience } from "../Profile/MainContent/Experience/Experience";
import { Container } from "react-bootstrap";

export const EditExperiences = () => {
  const { user } = useSelector((state) => state.user);
  const [experiences, setExperiences] = useState([]);

  const getExperiences = async () => {
    const baseEndpoint = process.env.REACT_APP_BE_URL

    if (user) {
    const res = await fetch(
      `${baseEndpoint}/experiences/63ce67c5b87b8603d6e1fb31`
    );
    
      const data = await res.json();
      setExperiences(data);
    }
  };

  useEffect(() => {
    getExperiences();
  }, [user]);

  return (
    <Container className="pb-5">
      <div className="edit-experiences">
          <h3 className="mb-5">Edit Experiences</h3>
        {experiences.map((exp) => (
          <Experience
            key={exp._id}
            experience={exp}
            canEdit={true}
            refreshExperiences={getExperiences}
          />
        ))}
      </div>
    </Container>
  );
};
