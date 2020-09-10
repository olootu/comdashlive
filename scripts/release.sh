#!/bin/bash
SOURCE_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
VERSION=`sh scripts/property.sh "version"`
git checkout -b "release/${VERSION}"
git push origin "release/${VERSION}" --tags
git checkout $SOURCE_BRANCH;
git push origin $SOURCE_BRANCH;

