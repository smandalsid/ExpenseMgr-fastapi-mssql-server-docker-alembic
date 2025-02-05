from fastapi import status

from tests.unit.conftest import *
from expensemgr.database.models.expense import Currency

def test_create_currency(db, client, admin_user):
    request_data = {
        "abbr": "testabbr",
        "desc": "testdesc"
    }
    response = client.post(url="/currency/create", json=request_data)
    assert response.status_code == status.HTTP_201_CREATED

    model: Currency = db.query(Currency).filter(Currency.currency_id == 1).first()
    assert model.abbr == request_data.get('abbr')
    assert model.desc == request_data.get('desc')