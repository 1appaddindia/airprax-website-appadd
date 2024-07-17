"use client";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; // Assuming you are using React Router
import HomePage from "../app/home/page";
import TagManager from "./TagManager";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HomePage />
      <TagManager />
    </main>
  );
};

export default Home;
