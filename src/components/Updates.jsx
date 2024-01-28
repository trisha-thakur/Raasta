// Updates.js
import React, { useState } from "react";
import signalImage from "../assets/signal.png";
import Modal from "../ui/Modal";

const Updates = () => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("english");
  const [trafficUpdates, setTrafficUpdates] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const fetchTrafficUpdates = () => {
    const placeholderMessage = `Latest traffic updates for ${location} in ${language}: Heavy traffic reported.`;
    setTrafficUpdates(placeholderMessage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#F1E4C3] to-[#FFFFEC] text-white">
      <div className="flex flex-col items-center justify-center text-white px-8 py-16">
        {/* Signal Image */}
        <img
          src={signalImage}
          alt="Signal"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-8 transform hover:scale-110 transition-transform duration-300 animate-pulse"
        />

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-[#597E52]">
          Traffic Updates
        </h2>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="mb-4 sm:mb-0">
            <label className="text-[#C6A969] font-bold pb-2 sm:pb-5 block">
              Enter Your Location:
            </label>
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              className="text-black border border-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            />
          </div>

          <div className="mb-4">
            <label className="text-[#C6A969] font-bold mb-5 block">
              Choose Language:
            </label>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-black p-3 text-black rounded-lg"
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              {/* Add more language options as needed */}
            </select>
          </div>
        </div>

        <button
          onClick={fetchTrafficUpdates}
          className="border bg-[#C6A969] text-black px-6 py-3 rounded-md hover:bg-[#F1E4C3] transform transition-transform duration-300 hover:scale-110 mt-8"
        >
          Get Traffic Updates
        </button>

        {/* {trafficUpdates && (
        //   <div className="mt-8 bg-[#597E52] p-6 rounded-lg w-full">
        //     <p className="text-lg sm:text-xl md:text-2xl text-[#FFFFEC]">
        //       {trafficUpdates}
        //     </p>
        //   </div>
        )} */}

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={<p className="text-lg text-black">{trafficUpdates}</p>}
        />
      </div>
    </div>
  );
};

export default Updates;