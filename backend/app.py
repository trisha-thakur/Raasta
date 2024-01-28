from flask import Flask, request, jsonify
import os
from embedchain import App
from flask_cors import CORS
import torch
from transformers import AutoModelForSeq2SeqLM
from IndicTransTokenizer import IndicProcessor, IndicTransTokenizer
from transformers import AutoModelForSeq2SeqLM
import easyocr
import cv2
import base64
import numpy as np


os.environ["HUGGINGFACE_ACCESS_TOKEN"] = "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"
app = App.from_config("mistral.yaml")

tokenizer = IndicTransTokenizer(direction="en-indic")
ip = IndicProcessor(inference=True)
model = AutoModelForSeq2SeqLM.from_pretrained("ai4bharat/indictrans2-en-indic-dist-200M", trust_remote_code=True)


flask_app = Flask(__name__)
CORS(flask_app)


reader = easyocr.Reader(['en'], model_storage_directory='easyocr-models')

@flask_app.route('/query', methods=['POST'])
def query():
    try:
        data = request.get_json()
        prompt = data.get('prompt', '')
        target_lang = data.get('target_lang', 'eng_Latn')  
        src_lang = data.get('src_lang', 'eng_Latn')  
        batch = ip.preprocess_batch([prompt], src_lang=src_lang, tgt_lang='eng_Latn')
        batch = tokenizer(batch, src=True, return_tensors="pt")
        with torch.inference_mode():
            outputs1 = model.generate(**batch, num_beams=5, num_return_sequences=1, max_length=256)
        text = tokenizer.batch_decode(outputs1, src=False)[0]
        app.add("https://www.godigit.com/traffic-rules/traffic-rules-every-motor-vehicle-drive-in-india-should-know")
        result = app.query(text)
        batch = ip.preprocess_batch([result], src_lang='eng_Latn', tgt_lang=target_lang)
        batch = tokenizer(batch, src=True, return_tensors="pt")
        
        with torch.inference_mode():
            outputs2 = model.generate(**batch, num_beams=5, num_return_sequences=1, max_length=256)

        translated_output = tokenizer.batch_decode(outputs2, src=False)[0]

        return jsonify({"answer": translated_output})
    except Exception as e:
        return jsonify({"error": str(e)})

@flask_app.route('/upload', methods=['POST'])
def upload():
    try:
        image_data = request.json['imageData']
        img_array = np.frombuffer(base64.b64decode(image_data.split(',')[1]), dtype=np.uint8)
        img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
        result = reader.readtext(img)
        ocr_text = ' '.join([detection[1] for detection in result])
        app.add(ocr_text, data_type='text')
        return jsonify({'success': True, 'text': ocr_text})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})
    
@flask_app.route('/query2', methods=['POST'])
def query2():
    try:
        data = request.get_json()
        prompt = data.get('prompt', '')
        result = app.query(prompt)
        return jsonify({"answer": result})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    flask_app.run(debug=True)