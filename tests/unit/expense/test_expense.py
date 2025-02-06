from fastapi import status

from expensemgr.database.models.expense import Expense, Currency

def test_get_all_expenses(db, client, regular_user, currency: Currency, expense: Expense):
    response = client.get(url="/expense/get_all")
    assert response.status_code == status.HTTP_200_OK
    response = response.json()
    print(response)
    assert response[0].get('amount') == expense.amount
    assert response[0].get('description') == expense.description
    assert response[0].get('expense_id') == expense.expense_id
    assert response[0].get('currency_abbr') == currency.abbr