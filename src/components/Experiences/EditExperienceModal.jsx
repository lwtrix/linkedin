import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

export const EditExperienceModal = ({
  experience,
  handleClose,
  show,
  refreshExperiences,
}) => {
  const { user } = useSelector((state) => state.user);

  const [editExperience, setEditExperience] = useState({
    role: experience.role,
    company: experience.company,
    description: experience.description,
    area: experience.area,
    startDate: experience.startDate,
    endDate: experience.endDate,
  });

  const handleChange = (value, fieldToSet) => {
    setEditExperience({
      ...editExperience,
      [fieldToSet]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editExperience),
    };

    if (user) {
      const baseEndpoint = process.env.REACT_APP_BE_URL

    const res = await fetch(
      `${baseEndpoint}/experiences/63ce67c5b87b8603d6e1fb31/${experience._id}`, config
    );

      refreshExperiences();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              value={editExperience.role}
              autoFocus
              required
              onChange={(e) => handleChange(e.target.value, "role")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={editExperience.company}
              required
              onChange={(e) => handleChange(e.target.value, "company")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              autoFocus
              rows={3}
              value={editExperience.description}
              required
              onChange={(e) => handleChange(e.target.value, "description")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Location</Form.Label>
            <Form.Control
              required
              value={editExperience.area}
              onChange={(e) => handleChange(e.target.value, "area")}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={editExperience.startDate.slice(0, 10)}
              required
              onChange={(e) => handleChange(e.target.value, "startDate")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={editExperience.endDate.slice(0, 10)}
              required
              onChange={(e) => handleChange(e.target.value, "endDate")}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
