from langdetect import detect

from fastapi import FastAPI, APIRouter
router = APIRouter()
app = FastAPI()

text = "Hello world!"
print(detect(text))

text = "Bonjour le monde!"

print(detect(text))
text = "Mīru elā unnāru"
print(detect(text))

text = "kya kar rahe ho"
print(detect(text))

from stanza.models.common.doc import Document
from stanza.pipeline.core import Pipeline

nlp = Pipeline(lang="multilingual", processors="langid")
docs = ["Hello world.", "Bonjour le monde!", "Mīru elā unnāru", "Yellarigu Namaskargalu"]
docs = [Document([], text=text) for text in docs]
nlp(docs)
print("\n".join(f"{doc.text}\t{doc.lang}" for doc in docs))