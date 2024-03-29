from fastapi import FastAPI, APIRouter
from .jokes import get_joke
from .news import get_news
from .text_to_speech import text_to_audio
from .speech_to_text import speech_to_text

router = APIRouter()
app = FastAPI()


@router.get("/medilinguaai/", tags=["Bot"])
def medilinguaai():
    text = speech_to_text()
    # text = 'joke'
    if 'joke' in text:
        response = get_joke()
    elif 'news' in text:
        response = get_news()
    else:
        response = "sorry could not understand"

    text_to_audio(response)
    return response
