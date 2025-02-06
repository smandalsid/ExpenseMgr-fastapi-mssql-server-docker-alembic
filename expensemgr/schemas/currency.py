from pydantic import BaseModel

class CurrencyBase(BaseModel):
    abbr: str
    desc: str

class CurrencyOut(CurrencyBase):
    currency_id: int