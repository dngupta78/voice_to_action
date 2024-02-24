from fastapi import FastAPI, APIRouter
import bcrypt
import pymongo
import uuid

from api.modules.patientsData import PatientsCreate

router = APIRouter()
app = FastAPI()

myclient = pymongo.MongoClient("mongodb://localhost:27017")
mydb = myclient["Semicolons"]
mycol = mydb["Patients"]

@router.post("/register/", tags=["Registration"])
async def create_user(patient_data: PatientsCreate):
    salt = bcrypt.gensalt() 
    password = patient_data.password
    bytes = password.encode('utf-8') 
    data = { 
        "_id": uuid.uuid4().hex,
        "firstName": patient_data.firstName,
        "lastName": patient_data.lastName,
        "email": patient_data.email,
        "phoneNumber": patient_data.phoneNumber,
        "password": bcrypt.hashpw(bytes, salt) ,
        "dOB": patient_data.dOB,
        "age": patient_data.age,
        "address": {
            "line1": patient_data.address.line1,
            "line2": patient_data.address.line2,
            "city": patient_data.address.city,
            "State": patient_data.address.state,
            "pinCode": patient_data.address.pinCode
        }
    }
    x = mycol.insert_one(data)
    print(x)
    if(x.acknowledged):
        return { 
            "msg": "added data succesfully"
        }
    else:
        return {
            "msg": "Data not inserted"
        }
 