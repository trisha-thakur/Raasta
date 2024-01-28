import React, { useState } from "react";
import road from "../assets/road.png";
import Modal from "../ui/Modal";

const LaxAI = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="h-screen w-full pt-8 pb-24 font-bold bg-[#597E52] heading relative left-0 right-0">
      <h1 className="text-4xl md:text-7xl ml-10 text-[#F1E4C3]">LAXAI</h1>
      <div className="flex flex-col md:absolute md:right-80 md:mr-10 p-5 z-10">
        <div className="mb-2 flex flex-col">
          <label className="text-[#F1E4C3] font-bold mb-2 text-lg md:text-2xl">
            What is your budget?{" "}
          </label>
          <input
            type="text"
            className="text-black bg-[#F1E4C3] border rounded focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label className="text-[#F1E4C3] font-bold mb-2 text-lg md:text-2xl">
            Where are you travelling from?{" "}
          </label>
          <input
            type="text"
            className="text-black bg-[#F1E4C3] border rounded focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>
        <div className="mb-2 flex flex-col">
          <label className="text-[#F1E4C3] font-bold mb-2 text-lg md:text-2xl">
            Where are you travelling to?{" "}
          </label>
          <input
            type="text"
            className="text-black bg-[#F1E4C3] border rounded focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>
        <div className="flex items-center">
          <button
            onClick={openModal}
            className="border bg-[#FFFFEC] text-lg md:text-2xl text-black px-6 py-3 rounded-md hover:bg-[#C6A969] transform transition-transform duration-300 hover:scale-110 mt-4 md:mt-8"
          >
            ENTER
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 mt-5 mb-0 ml-0 z-0">
        <div className="ml-10">
          <p className="overflow-hidden max-w-[500px] text-[#F1E4C3] text-xl">
            LAXAI is your personal AI assistant that will suggest you how to get
            to your desired destination on the given budget.
          </p>
        </div>

        <img src={road} alt="Lax Image" className="w-300 h-300" />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-2xl text-black">
          Modal content: Information on how to reach the destination.
        </p>
      </Modal>
    </section>
  );
};

export default LaxAI;
