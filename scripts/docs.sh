#!/bin/bash
apt-get update
apt-get --yes --force-yes install zip unzip
VERSION=`sh scripts/property.sh "version"`
NAME=`sh scripts/property.sh "name"`
cd documentation
rm -rf ../dist/${NAME}-docs-${VERSION}.zip
zip -r ../dist/${NAME}-docs-${VERSION}.zip *
