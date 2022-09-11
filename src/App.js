import React, { useState } from "react";
import { Home, Posts, Post, NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="posts">
        <Route index element={<Posts />} />
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
