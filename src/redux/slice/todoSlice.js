import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  listDone: [],
};

const addTodoSlice = createSlice({
  name: 'addTodo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action) => {
      const index = action.payload;
      const removedItem = state.list.splice(index, 1);
      state.listDone.push(removedItem[0]);
    },
  },
});

export const { addTodo, removeTodo, doneTodo} = addTodoSlice.actions;
export default addTodoSlice.reducer;
