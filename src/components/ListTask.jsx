import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = () => {
const { tasks, filterByStatus } = useSelector((state) => state.tasks);

return (
<div
    style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: 'flexStart',
    gap: "1.5rem",
    }}
>   
    {tasks
    .filter((task) => {
        return (
        task.isDone
            .trim()
            .toLowerCase()
            .includes(filterByStatus.trim().toLowerCase())
        );
    })
    .map((task) => (
        <Task key={task.id} task={task} />
    ))}
</div>
);
};

export default ListTask;