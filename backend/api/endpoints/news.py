from newsapi import NewsApiClient
from fastapi import FastAPI, APIRouter
import requests
router = APIRouter()
app = FastAPI()


@router.post("/def get_news/", tags=["NLP"])
def get_news():
    # Initialize News API client
    newsapi = NewsApiClient(api_key='851c03a0b3ca458790d61a556209b996')
    #
    # # Get top headlines
    top_headlines = newsapi.get_top_headlines(language='en')
    #
    # # Extract headlines
    headlines = [article['title'] for article in top_headlines['articles']]
    return headlines