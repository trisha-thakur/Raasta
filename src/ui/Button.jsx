// Button.js
import React from "react";

const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-transparent text-black border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring focus:border-white"
  >
    {children}
  </button>
);

export default Button;
