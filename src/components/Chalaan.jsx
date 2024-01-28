import React, { useState } from "react";
import axios from "axios";

const Chalaan = () => {
  const [image, setImage] = useState(null);
  const [ocrResult, setOcrResult] = useState("");
  const [question, setQuestion] = useState("");
  const [queryResult, setQueryResult] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleOCR = async () => {
    try {
      const response = await axios.post("http://172.20.10.3:5000/upload", {
        imageData: image,
      });

      setOcrResult(response.data.text);
    } catch (error) {
      console.error("Error performing OCR:", error);
    }
  };

  const handleQuery = async () => {
    try {
      const response = await axios.post("http://172.20.10.3:5000/query2", {
        prompt: ocrResult,
      });

      setQueryResult(response.data.answer);
    } catch (error) {
      console.error("Error querying:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F1E4C3] text-[#597E52] p-4 sm:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">Chalaan</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="border border-black rounded-lg p-3 mb-4 w-full sm:w-96"
      />
      <button
        onClick={handleOCR}
        className="border bg-[#FFFFEC] text-black px-6 py-3 rounded-md hover:bg-[#C6A969] transform transition-transform duration-300 hover:scale-110 mb-8"
      >
        Perform OCR
      </button>

      <div className="flex flex-col sm:flex-row w-full sm:w-96 mb-4">
        <strong className="mr-2">OCR Result:</strong>
        <p>{ocrResult}</p>
      </div>

      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border border-black rounded-lg p-3 mb-4 w-full sm:w-96"
      />
      <button
        onClick={handleQuery}
        className="border bg-[#FFFFEC] text-black px-6 py-3 rounded-md hover:bg-[#C6A969] transform transition-transform duration-300 hover:scale-110 mb-8"
      >
        Query
      </button>

      <div className="w-full sm:w-96">
        <strong>Query Result:</strong> {queryResult}
      </div>
    </div>
  );
};

export default Chalaan;
