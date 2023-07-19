import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const addTodoSlice = createSlice({
  name: 'addTodo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id);
    },
  },
});

export const { addTodo, removeTodo, doneTodo} = addTodoSlice.actions;
export default addTodoSlice.reducer;
