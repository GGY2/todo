import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createTask } from "../features/tasks/taskSlice";

const AddTask = () => {
const [show, setShow] = useState(false);
const [description, setDescription] = useState("");
const [isDone, setIsDone] = useState('Active');
const [counter, setCounter] = useState(0);

const dispatch = useDispatch();

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleSave = () => {
dispatch(createTask({ description, isDone }));
setDescription(""); 
setShow(false);
//this is not correct implementation, to be improved
setCounter(counter => counter + 1); 
};

    return (
    <>
    <Button style={{
        borderRadius: '20px',
        width: '200px',
        padding: '7px',
        boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)'
    }} 
        onClick={handleShow}>
        Add Task ({counter})
    </Button>

    <Modal style={{paddingTop: '150px', backgroundColor: '#c9dfff'}} show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title style={{fontSize: '22px'}}>Create new task</Modal.Title>
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
        <Form.Select aria-label="Default select example"
            disabled="true"
            value={isDone}
            onChange={(e) => setIsDone(e.target.value)}>
            <option value="Active">Active</option>
            <option value="Done">Done</option>
        </Form.Select>
        </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
        Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
        Save Changes
        </Button>
    </Modal.Footer>
    </Modal>
    </>
    );
    };

export default AddTask;