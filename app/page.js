import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; // Assuming you are using React Router
import HomePage from "../app/home/page";
import TagManager from "./TagManager";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    const handleUrlChange = () => {
      window.location.reload();
    };

    // Listen for changes in the URL
    const unlisten = history.listen(handleUrlChange);

    return () => {
      unlisten(); // Clean up the listener when component unmounts
    };
  }, [history]);

  return (
    <main className="overflow-hidden">
      <HomePage />
      <TagManager />
    </main>
  );
};

export default Home;
