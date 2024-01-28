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

## Architecture 🐏🐏
<img width="473" alt="image" src="https://github.com/trisha-thakur/Raasta/assets/34826479/35c92c2b-bbe7-4ab0-84f2-534f2ca1d43c">


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
- ### The RAG models like Llama2 were fine-tuned with PEFT — Parameter Efficient Fine Tuning methods like `Qlora` to save the VRAM efficiency

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


## Implementation of Raasta 🎇

#### Home Page View

![WhatsApp Image 2024-01-28 at 14 19 28_ac27fe53](https://github.com/trisha-thakur/Raasta/assets/107291403/69780779-e83e-4674-8482-fe7736ae240a)

### Chatbot with Language Support

![WhatsApp Image 2024-01-28 at 16 22 48](https://github.com/trisha-thakur/Raasta/assets/34826479/01fc9ee6-004c-41ed-bb3c-84806a00b6bd)

![WhatsApp Image 2024-01-28 at 16 25 37](https://github.com/trisha-thakur/Raasta/assets/34826479/9e6e8d3d-890e-4f28-b334-8029193755bf)

### Lax.ai 

![WhatsApp Image 2024-01-28 at 16 03 08](https://github.com/trisha-thakur/Raasta/assets/34826479/e85e8979-965f-4663-986b-b3415f7e7a1a)

<img width="629" alt="image" src="https://github.com/trisha-thakur/Raasta/assets/34826479/4113082b-7c8d-49d9-914a-40fc8d67299e">


### Live traffic updates

![WhatsApp Image 2024-01-28 at 14 20 06](https://github.com/trisha-thakur/Raasta/assets/34826479/911e9da0-9d6e-4106-9830-cdb62dd44810)

![WhatsApp Image 2024-01-28 at 14 20 28](https://github.com/trisha-thakur/Raasta/assets/34826479/21047fdf-67b3-47a3-88aa-d0a0fafb9691)


### Challan summariser and helper LLM with indic languages support


![WhatsApp Image 2024-01-28 at 14 21 41](https://github.com/trisha-thakur/Raasta/assets/34826479/d45e1a7c-1a6f-4d90-8132-7a1f96c69ef2)



![WhatsApp Image 2024-01-28 at 16 30 39](https://github.com/trisha-thakur/Raasta/assets/34826479/48da72de-5ad7-4398-ba54-c2e23ddf7cd6)


![WhatsApp Image 2024-01-28 at 16 30 39 (1)](https://github.com/trisha-thakur/Raasta/assets/34826479/c625b71c-56f9-453a-b8ef-171e769889c6)

### Route visualiser using Maps

![WhatsApp Image 2024-01-28 at 16 03 07](https://github.com/trisha-thakur/Raasta/assets/34826479/b5c6e24d-a232-40bc-8fa5-3e3ae1506fa9)


## Future Scope and Scalability 🚀

Raasta envisions further enhancements and scalability to meet evolving user needs and technological advancements:

- **Expansion of Live Data Integration:**
  - Future iterations will focus on expanding the integration of real-time data, including live updates on traffic, routes, and other dynamic information, into the database.

- **Memory Augmentation for Chatbot:**
  - To enhance the chatbot's capabilities, future plans include memory augmentation strategies. This involves increasing the memory allocated to the chatbot for better recall and responsiveness.

- **Scalability Through Additional Memory:**
  - Scalability is a key consideration, and plans involve increasing memory capacity to accommodate growing data and user interactions effectively.

- **Fine-tuning of All Models:**
  - Continuous refinement and fine-tuning of all models, including RAG models like Llama2, are on the roadmap. This ensures optimal performance and adaptability to diverse scenarios.

- **Improved Pipelines with Docker:**
  - Implementation of better pipelines, including Docker containers, to streamline deployment processes and enhance overall system efficiency. Dockerization provides a modular and scalable approach to managing different components.

- **Enhanced Data Processing:**
  - Future developments aim to incorporate advanced data processing techniques, allowing for faster and more efficient handling of large datasets and live updates.

- **Dynamic Language Support:**
  - Expanding language support for the chatbot to include more languages, making Raasta accessible to an even wider user base.

- **User Feedback Mechanism:**
  - Implementing a robust user feedback mechanism to gather insights, identify areas for improvement, and ensure a user-centric approach in future updates.

- **Optimization for Low Resource Environments:**
  - Considerations for optimizing the system to operate effectively in low resource environments, ensuring accessibility across a spectrum of devices and network conditions.

- **Security Enhancements:**
  - Strengthening security measures to safeguard user data and maintain the integrity of the system.

Raasta remains committed to continuous innovation, adaptability, and providing an ever-improving urban mobility solution.


### Model results

#### Fine tuning results 
 
<img width="128" alt="image" src="https://github.com/trisha-thakur/Raasta/assets/34826479/366b0b72-ea84-4f62-a7b5-2ca509441521">



<img width="457" alt="image" src="https://github.com/trisha-thakur/Raasta/assets/34826479/85c62500-285f-42bb-9755-da1d65ac54f0">

<img width="476" alt="image" src="https://github.com/trisha-thakur/Raasta/assets/34826479/0b21b859-16fb-49c2-b6ec-0f5e29c0ec2d">

<img width="453" alt="image" src="https://github.com/trisha-thakur/Raasta/assets/34826479/8472ce06-7dfa-4304-8362-5a8d6ff718fa">



## Setup Instructions 🛠️

### Prerequisites
Before you proceed with the setup, ensure that you have the following prerequisites installed on your system:

- [Python](https://www.python.org/) (version 3.7 or higher)
- [pip](https://pip.pypa.io/en/stable/)
- [Git](https://git-scm.com/)

### Clone Raasta Repository
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the Raasta repository.
3. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/trisha-thakur/Raasta.git


### Setup Virtual Environment (Optional but Recommended)
Navigate into the Raasta directory:

`cd Raasta` - navigate to current repository
`python -m venv venv` - create venv
`venv\Scripts\activate` - activate env

`source venv/bin/activate` activation command in mac or linux systems

### Install the required dependencies:

`pip install -r requirements.txt`


 

