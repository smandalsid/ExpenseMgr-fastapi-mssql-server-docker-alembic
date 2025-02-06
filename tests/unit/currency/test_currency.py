from fastapi import status

from tests.unit.conftest import *
from expensemgr.database.models.expense import Currency

def test_get_all_currency(db, client, regular_user, currency: Currency):
    response = client.get(url="/currency/get_all")
    assert response.status_code == status.HTTP_200_OK
    response = response.json()
    assert response[0].get('abbr') == currency.abbr
    assert response[0].get('desc') == currency.desc
