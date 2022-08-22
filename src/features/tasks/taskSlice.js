import { createSlice } from '@reduxjs/toolkit';

export const filterTypes = {
    STATUS: "STATUS"
};

const taskSlice = createSlice({
name: "tasks",
initialState: {
    tasks: [],
    filterByStatus: ''
},
reducers: {
    editTask(state, action) {
    const { id, description, isDone } = action.payload; 
    const task = state.tasks.find((t) => t.id === id);
    task.description = description;
    task.isDone = isDone;
    },
    createTask(state, action) {
    const { description, isDone } = action.payload;
    state.tasks.push({
        id: state.tasks.length + 1,
        description,
        isDone
    });
    },
    editFilter(state, action) {
    const { filterBy, value } = action.payload;
    if (filterBy === filterTypes.STATUS) state.filterByStatus = value;
    },
},
});

export const { editTask, createTask, editFilter } = taskSlice.actions;
export default taskSlice.reducer;