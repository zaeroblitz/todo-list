import React from "react";

import "./App.css";
import Todo from "./Todo";

const App = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center context">
        <div className="container mx-auto px-8 mt-4">
          <h1 className="text-3xl text-center text-white font-bold mb-4">
            What's the plan for today?
          </h1>
          <Todo />
        </div>
      </div>
      {/* BACKGROUND */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default App;
