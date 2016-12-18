#!/bin/bash

comment=$1

if [[ -n "$comment" ]]; then
git add *
git commit -m "$1"
git push -u origin master
echo finished with no errors.
else
    echo "must include a comment"
fi