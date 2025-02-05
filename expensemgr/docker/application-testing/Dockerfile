FROM python:3.12

WORKDIR /

ENV PYTHONPATH=/

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

RUN apt-get update && apt-get install -y \
   curl \
&& rm -rf /var/lib/apt/lists/*

RUN curl -sSL https://install.python-poetry.org | python3 -

ENV PATH="/root/.local/bin:${PATH}"

RUN pip install poetry

COPY pyproject.toml poetry.lock ./

RUN poetry install --no-root

COPY . .

RUN chmod a+x expensemgr/docker/application-testing/entrypoint.sh
RUN chmod a+x expensemgr/docker/wait-for-db.sh
RUN chmod a+x expensemgr/docker/application-testing/create-db.sh
RUN chmod a+x expensemgr/docker/application-testing/setup.sql

CMD "./expensemgr/docker/application-testing/entrypoint.sh"