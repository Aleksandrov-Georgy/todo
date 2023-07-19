import { configureStore } from '@reduxjs/toolkit';

import addTodo from './slice/todoSlice';
import removeTodo from './slice/todoSlice';
import doneTodo from './slice/todoSlice';


export const store = configureStore({
  reducer: {
    addTodo: addTodo,
    removeTodo: removeTodo,
  },
});
