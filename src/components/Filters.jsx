import React from "react";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { filterTypes, editFilter } from "../features/tasks/taskSlice";
import './Filters.css';

const Filters = () => {
const dispatch = useDispatch();
const { filterByStatus } = useSelector((state) => state.tasks);

return (
<div>
    <Form>
    <Form.Group >
        <Form.Control
        className="filter"
        type="text"
        placeholder="Filter by status"
        value={filterByStatus}
        onChange={(e) =>
            dispatch(
            editFilter({
                filterBy: filterTypes.STATUS,
                value: e.target.value,
            })
            )
        }
        />
    </Form.Group>
    </Form>
</div>
);
};

export default Filters;