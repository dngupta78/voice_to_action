from fastapi import FastAPI, APIRouter
import speech_recognition as sr
router = APIRouter()
app = FastAPI()


@router.get("/audio_to_text/", tags=["Audio To Text"])
def audio_to_text():
    return {"message": "Hello World"}



