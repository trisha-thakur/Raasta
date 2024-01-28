import React from "react";

const Footer = () => {
  const teamMembers = [
    { name: "Trisha Sharan Thakur", github: "https://github.com/trisha-thakur" },
    { name: "Mathangy K", github: "https://github.com/mkswagger" },
    { name: "Anouska Jhunjhunwala", github: "https://github.com/AnouskaJ" },
    { name: "Devanshi Agrawal", github: "https://github.com/ZYDNET" },
  ];

  return (
    <footer className="bg-[#F1E4C3] text-white py-6 text-center">
      <p className="mb-4 text-[#597E52]">
        Made with <span className="text-red-500">&#10084;</span> by Team Binary Bosses
      </p>

      <ul className="flex justify-center  space-x-4">
        {teamMembers.map((member, index) => (
          <li key={index}>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#597E52] hover:text-gray-300"
            >
              {member.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
