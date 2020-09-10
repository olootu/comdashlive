#!/bin/bash
apt-get update
apt-get install tar
VERSION=`sh scripts/property.sh "version"`
NAME=`sh scripts/property.sh "name"`
SUFFIX=$1

cd dist
rm -rf ./${NAME}-${VERSION}${SUFFIX}.tar.gz
tar -czvf ./${NAME}-${VERSION}${SUFFIX}.tar.gz *
