# Run the SQL script to create the database

echo "Creating ExpensemgrTest database..."
/opt/mssql-tools/bin/sqlcmd -S tcp:$SQL_SERVER,$SQL_PORT -U $SQL_USER -P $SQL_PASSWORD -d master -i expensemgr/docker/application-testing/setup.sql

echo "Running alembic migrations..."
poetry run alembic upgrade head