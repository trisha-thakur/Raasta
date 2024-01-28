# Raasta - Bridging the gap between languages and travel. 🛺

## Problem Statement 📚

In bustling cities, such as those in India, transportation apps encounter challenges in providing quick and effective solutions due to diverse languages spoken by the users. Moreover, there is a significant issue related to transparent cost estimates for individuals with budget constraints.

## Our Solution 📱
Raasta employs a diverse set of AI tools to effectively eliminate linguistic and economic barriers in the realm of urban mobility. With this innovative solution, users can effortlessly access real-time traffic advisories in their preferred language. Furthermore, Raasta goes a step further by providing personalized route suggestions based on the user's budget, ensuring a seamless and cost-effective travel experience

## Key Features 🤖

- Lax.ai Integration: 🦾
  - Utilizes Lax.ai for predicting the most economic mode of travel between two locations.

- Challan Reader: 📄
  - OCR feature using `pytesseract` to extract information from images (challans in traffic safety being issued).

- Voice to Voice Support: 🗣
  - Speech to Speech conversation feature using Distilled Whisper LLM, gTTS, and PLAYHT.

- Live Support: 🔬
  - Integrates real-time data, including live updates on traffic and routes through Google Maps APIs.

- RAG Models with Custom Data: 📊
  - Uses Retrieval-Augmented Generation (RAG) models with custom data for accurate and reliable outputs.

- Fine-tuned on Specific Dataset: 📈
  - RAG models like Llama2 are fine-tuned for more effective performance on a specific dataset.

- Website Interface: 💻
  - User-friendly website interface for easy interaction and navigation.

- New Tech Integration: 🛠
  - Incorporates new technologies and frameworks for improved efficiency and functionality.

## Architechture 🐏🐏
![arc](https://github.com/trisha-thakur/Raasta/assets/107291403/e67ef8d5-5ede-4564-aeaa-c9ef726f2f33)

- ### Custom Data Optimization: 
   The RAG (Retrieval-Augmented Generation) stands out from traditional Language Models (LLMs) by leveraging custom data, a crucial factor that enhances accuracy and reliability in model outputs. Used `mistral 7B model` with `Embedchain` Framework

- ### Vectorized Input Processing:
  Input documents undergo conversion into vectors, and these vectors are efficiently stored in a database that is `vector db` here.

- ### Knowledge Retrieval:
  The architecture facilitates the retrieval of vectors based on user queries, enabling effective access to relevant information.
  
- ### Flexible User Inputs:
   Users can contribute to the model's knowledge base by providing links or documents as knowledge sources for the RAG.

- ### Real-time Traffic Updates:
  The system integrates live updates on traffic and routes, utilizing Google Maps APIs. This dynamic information is actively included in the model's training process.

- ### Enhanced Model Training:
   The incorporation of real-time data ensures that the RAG remains up-to-date, particularly in the context of urban mobility and route recommendations. This feature contributes to the model's adaptability and responsiveness.
- ### Lax.ai works on Google Maps API and a custom Machine learning model that predicts what is the most economic mode of travel between the given two places

- ### Challan Feature has OCR Feature using `pytesseract` that extracts the info from the image and is added to the chatbot's knowledge base for additional questioning
- ###  A common chatbot that supports all your queries regarding road safety and any important topic related to travel, It supports `22 Indic Languages` and is powered by `AI4Bharat's` model `INDICTRANS2` LLM.
- ### The query chatbot also has Speech to Speech conversation feature made out of a pipeline of `Distilled Whisper LLM` and `gTTS`, additionally we have also tested `PLAYHT` for the same use case
- ### The RAG models like Llama2 were fine-tuned with efficient hyper-parameter methods like `Qlora` to save the VRAM efficiency

## Technology Used 💻

### Web: 

- React + Vite
- TailwindCSS
- Flask

### ML: 🧠

- Data Scraping for real-time data(selenium & Beautiful soup)
- RAG powered models.(Mistral 7B model with finetuning)
- Indic language support. (Indictrans2 LLM from AI4bharat)
- Speech to Speech models ( Distilled Whisper and PlayHT with gTTS) for Indic languages support
- Finetuned Llama models on dataset for more efficiency
- OCR models for image to text


## Web Implementation
![WhatsApp Image 2024-01-28 at 14 19 28_ac27fe53](https://github.com/trisha-thakur/Raasta/assets/107291403/69780779-e83e-4674-8482-fe7736ae240a)

![WhatsApp Image 2024-01-28 at 14 19 46_14049146](https://github.com/trisha-thakur/Raasta/assets/107291403/beb42927-8d3f-4cf3-9342-ca8d12435d01)

![WhatsApp Image 2024-01-28 at 16 03 08](https://github.com/trisha-thakur/Raasta/assets/34826479/e85e8979-965f-4663-986b-b3415f7e7a1a)

![WhatsApp Image 2024-01-28 at 14 20 06](https://github.com/trisha-thakur/Raasta/assets/34826479/911e9da0-9d6e-4106-9830-cdb62dd44810)

![WhatsApp Image 2024-01-28 at 14 20 28](https://github.com/trisha-thakur/Raasta/assets/34826479/21047fdf-67b3-47a3-88aa-d0a0fafb9691)


![WhatsApp Image 2024-01-28 at 16 03 07](https://github.com/trisha-thakur/Raasta/assets/34826479/b5c6e24d-a232-40bc-8fa5-3e3ae1506fa9)


![WhatsApp Image 2024-01-28 at 14 21 41](https://github.com/trisha-thakur/Raasta/assets/34826479/d45e1a7c-1a6f-4d90-8132-7a1f96c69ef2)






 

