from typing import List

from expensemgr.database.db import db_dependency
from expensemgr.schemas.currency import CurrencyBase, CurrencyOut
from expensemgr.database.models.expense import Currency
from expensemgr.routers.users import user_dependency

class CurrencyService:
    def __init__(self, db: db_dependency, user: user_dependency):
        self.db = db
        self.user = user

    def create_currency(self, currency: CurrencyBase) -> CurrencyBase:
        new_currency = Currency(
            created_by = self.user.get('id'),
            abbr = currency.abbr,
            desc = currency.desc
        )
        self.db.add(new_currency)
        self.db.commit()

        currency = self.db.query(Currency).filter(Currency.currency_id == new_currency.currency_id).first()
        return currency
    

    def get_all_currency(self) -> List[CurrencyOut]:
        return self.db.query(Currency).all()