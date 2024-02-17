from fastapi import FastAPI, APIRouter

router = APIRouter()
app = FastAPI()


@router.get("/", tags=["Audio To Text"], include_in_schema=False)
def root():
    return {"message": "Hello World"}