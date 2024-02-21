from gtts import gTTS
import os
from fastapi import FastAPI, APIRouter

router = APIRouter()
app = FastAPI()


@router.get("/text_to_audio/", tags=["Text To Audio"])
def text_to_audio(text, language='en'):
    tts = gTTS(text=text, lang=language, slow=False)
    tts.save("output.mp3")
    os.system("start output.mp3")


# Example usage:
text = "Hello, this is a sample text to be converted into audio."
text_to_audio(text)
