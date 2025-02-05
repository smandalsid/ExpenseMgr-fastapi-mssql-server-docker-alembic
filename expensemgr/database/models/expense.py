from sqlalchemy import Column, Integer, String, Float, ForeignKey

from expensemgr.database.db import Base

class Currency(Base):
    __tablename__ = "currency"

    currency_id = Column(Integer, primary_key=True, index=True)
    abbr = Column(String(10), unique=True, index=True, nullable=False)
    desc = Column(String(255), nullable=False)


class Expense(Base):
    __tablename__ = "expenses"

    expense_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    currency_id = Column(Integer, ForeignKey("currency.currency_id"))
    amount = Column(Float, nullable=False)
    description = Column(String(255))
