from pydantic import BaseModel

class Address(BaseModel):
    line1: str
    line2: str
    city: str
    state: str
    pinCode: str


class PatientsCreate(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str
    phoneNumber: str
    dOB: str
    age: str
    address: Address