"use client";
import React from "react";

import "./home.css";

import Home from "./views/home/page";
import Login from "./views/login/page";

const HomePage = () => {
  return (
    <>
      <div>
        <Home />
        <Login />
      </div>
    </>
  );
};
export default HomePage;
