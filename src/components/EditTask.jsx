import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const EditTask = ({ show, handleClose, handleSave, task }) => {
const [description, setDescription] = useState(task.description);
const [isDone, setIsDone] = useState(task.isDone);
return (
<>
    <Modal style={{paddingTop: '150px', backgroundColor: '#c9dfff'}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title style={{fontSize: '22px'}}>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
            type="text"
            placeholder="Your next task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Status</Form.Label>
        <Form.Select
            value={isDone}
            onChange={(e) => setIsDone(e.target.value)}>
            <option value="Done">Done</option>
            <option value="Active">Active</option>
        </Form.Select>
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
            <Button variant="primary" onClick={() => handleSave(task.id, description, isDone)}>
            Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
</>
);
}

export default EditTask;