from fastapi import FastAPI
from expensemgr.database.db import engine, Base

from expensemgr.routers import auth, users, expense

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/health")
async def get_health_check():
    return {"Message": "Application looks healthy"}

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(expense.router)