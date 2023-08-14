import React from "react";
import { Todo } from "../pages/Todo";
import { Posts } from "../pages/Posts";

import "./App.scss";

import { Header } from "../components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Users } from "../pages/Users";

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
