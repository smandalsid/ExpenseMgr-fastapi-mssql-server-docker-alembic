from fastapi import APIRouter, status, HTTPException, Depends
from typing import Annotated

from expensemgr.database.db import db_dependency
from expensemgr.database.models.expense import Currency, Expense
from expensemgr.schemas.expense import ExpenseBase, CreateExpense
from expensemgr.routers.users import user_dependency

router = APIRouter(
    prefix='/expense',
    tags=['expense'],
)

@router.post("/create", status_code=status.HTTP_201_CREATED, response_model=ExpenseBase)
async def create_expense(db: db_dependency, user: user_dependency, create_expense: CreateExpense):
    pass