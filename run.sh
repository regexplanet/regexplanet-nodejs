#!/usr/bin/env bash
#
# run server locally
#

set -o errexit
set -o pipefail
set -o nounset

ENVFILE="./.env"

if [ -f "${ENVFILE}" ]
then
    echo "INFO: load env file ${ENVFILE}"
    export $(grep "^[^#]" "${ENVFILE}")
fi

npm install

npx tsc-watch \
  --incremental \
  --onSuccess "node dist/server.js"
