// Home.jsx
import React, { useState } from "react";
import Button from "../ui/Button";
import Updates from "./Updates";
import Chatbot from "./Chatbot";

const Home = () => {
  const [showUpdates, setShowUpdates] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat h-screen m-0 p-0 flex flex-col items-center justify-center">
      <div
        className="bg-fixed rounded-lg p-5 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <h1 className="text-4xl md:text-8xl text-white">RAASTA</h1>
      </div>
      <div className="flex text-white space-x-4 mt-5">
        <Button onClick={toggleChatbot}>Chat with Raasta</Button>
      </div>
      {showUpdates && <Updates />}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </div>
  );
};

export default Home;
