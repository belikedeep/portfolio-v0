#!/bin/bash

current_branch=$(git rev-parse --abbrev-ref HEAD)

if [ "$current_branch" != "dev" ]; then
    echo "Error: You must be on the dev branch to run this script."
    exit 1
fi

git add .

read -p "Enter commit message: " commit_message

git commit -m "$commit_message"

git push origin dev

git checkout main

git pull origin main

git merge dev

git push origin main 

git checkout dev

echo "Changes have been successfully pushed to both dev and main branches."