import requests
text=input("your text : ")

import time
url = "https://api.play.ht/api/v2/tts"

payload = {
    "text": f"{text}",
    "voice": "s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json",
    "output_format": "mp3",
    "voice_engine": "PlayHT1.0",
    "quality": "medium",
    "speed": 0.5
}
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "AUTHORIZATION": "c810bf6e8862417dbc1e0a067bae5a6f",
    "X-USER-ID": "FVwTU24dsueBWlC2zNa9vz7bdEg2"
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
transcription_id = response.json().get('id')
print(transcription_id)
import requests

url1 = f"https://api.play.ht/api/v2/tts/{transcription_id}"
print(url1)
headers1 = {
    "accept": "application/json",
    "AUTHORIZATION": "c810bf6e8862417dbc1e0a067bae5a6f",
    "X-USER-ID": "FVwTU24dsueBWlC2zNa9vz7bdEg2"
}

response = requests.get(url1, headers=headers1)
for i in range(63):
    import json
    response = requests.get(url1, headers=headers1)
    a=response.text
    parsed_data = json.loads(a)
    status = parsed_data['status']
    print(a)
    if status=="complete":
        t1=parsed_data['output']['url']
        print(t1)
        import requests

        mp3_url = t1
        file_path = "downloaded_file.mp3"

        response = requests.get(mp3_url)

        if response.status_code == 200:
            with open(file_path, 'wb') as f:
                f.write(response.content)
            print("File downloaded successfully as:", file_path)
        else:
            print("Failed to download the file. Status code:", response.status_code)

        break
    print(status)
    time.sleep(2)

