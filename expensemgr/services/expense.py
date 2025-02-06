from typing import List

from expensemgr.database.db import db_dependency
from expensemgr.schemas.expense import ExpenseBase, CreateExpense, ExpenseOut
from expensemgr.database.models.expense import Expense, Currency
from expensemgr.routers.users import user_dependency

class ExpenseService:
    
    def __init__(self, db: db_dependency, user: user_dependency):
        self.db = db
        self.user = user

    def create_expense(self, expense: CreateExpense) -> ExpenseBase:
        new_expense = Expense(
            user_id = self.user.get('id'),
            currency_id = expense.currency_id,
            amount = expense.amount,
            description = expense.description
        )
        self.db.add(new_expense)
        self.db.commit()

        expense = self.db.query(Expense).filter(Expense.expense_id == new_expense.expense_id).first()
        return expense
    
    def get_all_expenses(self) -> List[ExpenseOut]:
        return \
            self.db.query(
                Expense.amount,
                Expense.description,
                Expense.expense_id,
                Currency.abbr.label("currency_abbr")). \
            join(Currency, Expense.currency_id == Currency.currency_id). \
            filter(Expense.user_id == self.user.get('id')). \
            all()