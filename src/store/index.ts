import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { postsApi } from "./postsApi";
import { usersApi } from "./usersApi";

const rootReducer = combineReducers({
  todos: todoReducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(postsApi.middleware, usersApi.middleware),
});
