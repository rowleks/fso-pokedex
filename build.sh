#!/bin/bash

set -e

echo "Cleaning old dist..."
rm -rf dist

echo "Installing backend dependencies..."
npm install

echo "Building app..."
npm run build