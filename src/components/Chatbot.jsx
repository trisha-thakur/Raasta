// Chatbot.jsx
import React, { useState } from "react";

const languageOptions = [
  { value: "eng_Latn", label: "English" },
  { value: "asm_Beng", label: "Assamese" },
  { value: "kas_Arab", label: "Kashmiri (Arabic)" },
  { value: "pan_Guru", label: "Punjabi" },
  { value: "ben_Beng", label: "Bengali" },
  { value: "kas_Deva", label: "Kashmiri (Devanagari)" },
  { value: "san_Deva", label: "Sanskrit" },
  { value: "brx_Deva", label: "Bodo" },
  { value: "mai_Deva", label: "Maithili" },
  { value: "sat_Olck", label: "Santali" },
  { value: "doi_Deva", label: "Dogri" },
  { value: "mal_Mlym", label: "Malayalam" },
  { value: "snd_Arab", label: "Sindhi (Arabic)" },
  { value: "mar_Deva", label: "Marathi" },
  { value: "snd_Deva", label: "Sindhi (Devanagari)" },
  { value: "gom_Deva", label: "Konkani" },
  { value: "mni_Beng", label: "Manipuri (Bengali)" },
  { value: "tam_Taml", label: "Tamil" },
  { value: "guj_Gujr", label: "Gujarati" },
  { value: "mni_Mtei", label: "Manipuri (Meitei)" },
  { value: "tel_Telu", label: "Telugu" },
  { value: "hin_Deva", label: "Hindi" },
  { value: "npi_Deva", label: "Nepali" },
  { value: "urd_Arab", label: "Urdu" },
  { value: "kan_Knda", label: "Kannada" },
  { value: "ory_Orya", label: "Odia" },
];

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("eng_Latn");

  const handleQuery = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isUser: true },
    ]);

    try {
      const response = await fetch("http://127.0.0.1:5000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input, target_lang: selectedLanguage }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.answer, isUser: false },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Error: " + (data.error || "Something went wrong"),
            isUser: false,
          },
        ]);
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error: Failed to communicate with the server", isUser: false },
      ]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleQuery();
    }
  };

  return (
    <div className="chatbot-container bg-[#F1E4C3] text-[#597E52] fixed bottom-4 right-4 w-[90vw] max-w-[440px] max-h-[80vh] p-6 rounded-lg border border-[#e5e7eb] overflow-auto">
      <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>

      <div className="flex flex-col items-center mt-4">
        <label className="text-[#6b7280] text-sm mb-2">Select Language:</label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="border text-black border-black rounded-md p-2 w-full"
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="pr-4 max-h-[474px] overflow-auto mt-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.isUser ? "text-right text-[#6b7280]" : "text-left"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-4">
        <form className="flex items-center justify-between w-full space-x-2">
          <input
            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2 overflow-hidden"
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            type="button"
            onClick={handleQuery}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
          >
            Send
          </button>
        </form>
      </div>

      <button
        onClick={() => {
          onClose();
        }}
        className="border bg-[#597E52] text-[#F1E4C3] px-4 py-2 rounded-md hover:bg-[#C6A969] transform transition-transform duration-300 hover:scale-110 mt-4"
      >
        Close Chat
      </button>
    </div>
  );
}

export default Chatbot;
