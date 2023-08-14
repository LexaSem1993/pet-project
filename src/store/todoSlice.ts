import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types";

const initialState: { todos: Item[] } = { todos: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Item>) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      const indexForRemove = state.todos.findIndex(
        (el) => el.id === action.payload.id
      );
      state.todos.splice(indexForRemove, 1);
    },
    allDeleteTodo(state) {
      state.todos = [];
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
