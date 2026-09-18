import os
from datetime import datetime, timezone
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from motor.motor_asyncio import AsyncIOMotorClient

app=FastAPI(title='KAIROS Beverages API')
app.add_middleware(CORSMiddleware,allow_origins=['*'],allow_credentials=True,allow_methods=['*'],allow_headers=['*'])
MONGO_URL=os.getenv('MONGO_URL','mongodb://localhost:27017')
client=AsyncIOMotorClient(MONGO_URL)
db=client[os.getenv('DB_NAME','kairos')]
class Enquiry(BaseModel):
    name:str=Field(min_length=2,max_length=100)
    email:EmailStr
    company:str=Field(default='',max_length=150)
    message:str=Field(min_length=5,max_length=3000)
@app.get('/api/')
async def health(): return {'ok':True,'service':'kairos-beverages'}
@app.post('/api/enquiries')
async def create_enquiry(item:Enquiry):
    doc=item.model_dump();doc['created_at']=datetime.now(timezone.utc)
    result=await db.enquiries.insert_one(doc)
    return {'ok':True,'id':str(result.inserted_id)}
@app.get('/api/enquiries')
async def get_enquiries():
    docs=await db.enquiries.find().sort('created_at',-1).to_list(100)
    for d in docs:d['_id']=str(d['_id'])
    return docs
