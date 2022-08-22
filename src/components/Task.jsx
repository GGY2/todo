import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import EditTask from './EditTask';
import { useDispatch } from 'react-redux';
import { editTask } from "../features/tasks/taskSlice";


const Task = ({task}) => {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleHideModal = () => setShowModal(false); 
    const handleSaveModal = (id, description, isDone) => {
        dispatch(editTask({id, description, isDone}));
        setShowModal(false);
    };

    return(
        <>
        <Card style={{ width: '200px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                <Card.Text>
                    <span style={{
                        borderRadius: '10px', 
                        backgroundColor: task.isDone === 'Active' ? '#f1f1f1' : '#0fcd96', 
                        padding: '3px 7px 5px 7px', 
                        fontSize: '12px', 
                        color: task.isDone === 'Active' ? '#333' : '#ffff'
                        }}>{task.isDone}</span>
                </Card.Text>
                <Card.Text>
                    {task.description}
                </Card.Text>
                <Button style={{width: '100%'}} variant="primary" onClick={handleShowModal}>Edit Task</Button>
            </Card.Body>
        <EditTask
        show={showModal}
        handleClose={handleHideModal}
        handleSave={handleSaveModal}
        task={task}
        />
        </Card>
        </>
    );
}

export default Task;