import os
# replace this with your HF key
os.environ["HUGGINGFACE_ACCESS_TOKEN"] = "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"

from embedchain import App
app = App.from_config("mistral.yaml")
app.add("https://www.forbes.com/profile/elon-musk")
app.add("https://en.wikipedia.org/wiki/Elon_Musk")
app.query("What is the net worth of Elon Musk today?")
# Answer: The net worth of Elon Musk today is $258.7 billion.
