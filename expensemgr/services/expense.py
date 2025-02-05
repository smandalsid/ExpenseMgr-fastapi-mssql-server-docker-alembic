from fastapi import HTTPException, status

from expensemgr.database.db import db_dependency
from expensemgr.schemas.expense import ExpenseBase, CreateExpense
from expensemgr.database.models.expense import Expense
from expensemgr.routers.users import user_dependency

class ExpenseService:
    
    def __init__(self, db: db_dependency, user: user_dependency):
        self.db = db
        self.user = user

    def create_expense(self, expense: CreateExpense) -> ExpenseBase:
        new_expense = Expense(
            user_id = self.user.id,
            currency_id = expense.currency_id,
            amount = expense.amount,
            description = expense.description
        )
        self.db.add(new_expense)
        self.db.commit()

        expense = self.db.query(Expense).filter(Expense.expense_id == new_expense.expense_id)
        return expense