FROM python:3.12

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    POETRY_NO_INTERACTION=1 \
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/pysetup/.venv"

RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update \
    && ACCEPT_EULA=Y apt-get install --no-install-recommends -y \
        build-essential \
        python3-dev \
        msodbcsql17 \
        mssql-tools \
        unixodbc-dev \
        unixodbc

RUN pip install pyodbc
    
WORKDIR /expensemgr

RUN apt-get update && apt-get install -y \
   curl \
&& rm -rf /var/lib/apt/lists/*

RUN curl -sSL https://install.python-poetry.org | python3 -

ENV PATH="/root/.local/bin:${PATH}"

RUN pip install poetry

COPY pyproject.toml poetry.lock ./

RUN poetry install --no-root

COPY . .

RUN chmod a+x expensemgr/docker/application/entrypoint.sh
RUN chmod a+x expensemgr/docker/wait-for-db.sh
RUN chmod a+x expensemgr/docker/application/create-db.sh
RUN chmod a+x expensemgr/docker/application/setup.sql

EXPOSE 8000

CMD "expensemgr/docker/application/entrypoint.sh"
