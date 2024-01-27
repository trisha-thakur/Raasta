// LaxAI.js
import React from "react";
import road from "../assets/road.png";  // Update the path to your image

const LaxAI = () => {
  return (
    <section className="h-screen w-full pt-8 pb-24 font-bold bg-[#597E52] heading relative overflow-hidden left-0 right-0">
      <h1 className="text-6xl ml-5 text-[#F1E4C3]">LAXAI</h1>
      <div className="absolute bottom-0 left-0 mb-0 ml-0">
        <img src={road} alt="Lax Image" className="w-200 h-200" />
      </div>
      <div>
        <p>
          {/* Your content here */}
        </p>
      </div>
    </section>
  );
}

export default LaxAI;
