#!/bin/bash
[ -z "$1" ] && 1="version"
echo $(cat package.json \
  | grep "$1" \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[\",]//g' \
  | tr -d '[[:space:]]')
