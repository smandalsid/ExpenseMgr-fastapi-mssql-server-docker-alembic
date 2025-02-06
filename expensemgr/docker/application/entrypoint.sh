#!/bin/bash

# waiting for db
expensemgr/docker/wait-for-db.sh

# creating db and running migrations
expensemgr/docker/application/create-db.sh

poetry run uvicorn expensemgr.main:app --host 0.0.0.0 --port 8000