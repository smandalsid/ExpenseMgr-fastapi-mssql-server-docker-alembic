from pydantic import BaseModel

class ExpenseBase(BaseModel):
    amount: float
    description: str

class CreateExpense(ExpenseBase):
    currency_id: int

class ExpenseOut(ExpenseBase):
    expense_id: int
    currency_abbr: str