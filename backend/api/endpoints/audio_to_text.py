from fastapi import FastAPI, APIRouter
import speech_recognition as sr
router = APIRouter()
app = FastAPI()


@router.get("/audio_to_text/", tags=["Audio To Text"])
def audio_to_text():
    return {"message": "Hello World"}


@router.get("/speech_to_text/", tags=["Audio To Text"])
def speech_to_text():
    # Initialize recognizer
    recognizer = sr.Recognizer()

    # Use the default microphone as the audio source
    with sr.Microphone() as source:
        print("Listening...")

        # Adjust for ambient noise levels
        recognizer.adjust_for_ambient_noise(source)

        # Capture audio input from the microphone
        audio = recognizer.listen(source)

    try:
        print("Recognizing...")
        # Use recognizer to convert speech to text
        text = recognizer.recognize_google(audio)
        print("You said:", text)
    except sr.UnknownValueError:
        print("Sorry, I could not understand what you said.")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))


if __name__ == "__main__":
    speech_to_text()



