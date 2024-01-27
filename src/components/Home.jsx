// Home.js
import React, { useState } from "react";
import Button from "../ui/Button";
import Updates from "./Updates";

const Home = () => {
  const [showUpdates, setShowUpdates] = useState(false);

  const handleClick = () => {
    setShowUpdates(true);
    console.log("button pressed");
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat h-screen m-0 p-0 flex flex-col items-center justify-center">
      <div
        className="bg-fixed rounded-lg p-5 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <h1 className="text-4xl md:text-8xl text-white">RAASTA</h1>
      </div>
      {/* <div className="flex space-x-4 mt-5">
        <Button onClick={handleClick}>Updates</Button>
        <Button>LaxAI</Button>
        <Button>My Documents</Button>
      </div>  */}
      {showUpdates && <Updates />}
    </div>
  );
};

export default Home;
