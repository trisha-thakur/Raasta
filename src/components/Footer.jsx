import React from "react";

const Footer = () => {
  const teamMembers = [
    { name: "Trisha Sharan Thakur ● ", github: "https://github.com/trisha-thakur" },
    { name: "Mathangy K ● ", github: "https://github.com/mkswagger" },
    { name: "Anouska Jhunjhunwala ● ", github: "https://github.com/AnouskaJ" },
    { name: "Devanshi Agrawal", github: "https://github.com/ZYDNET" },
  ];

  return (
    <footer className="bg-[#597E52] text-white py-6 text-center">
      <p className="mb-4 text-[#F1E4C3]">
        Made with <span className="text-red-500">&#10084;</span> by Team Binary Bosses
      </p>

      <ul className="flex flex-wrap justify-center space-x-4">
        {teamMembers.map((member, index) => (
          <li key={index} className="mb-2 sm:mb-0">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F1E4C3] hover:text-gray-300"
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
