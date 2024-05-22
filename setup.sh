#!/bin/bash

# Install npm packages
echo "Installing npm packages..."
npm install

# Check if .env file exists
if [ ! -f .env ]; then
  echo "Creating .env file..."
  touch .env

  echo "Please add the following environment variables to the .env file:"
  echo "MONGO_URI=your_mongodb_connection_string"
  echo "JWT_SECRET=your_jwt_secret"
else
  echo ".env file already exists. Skipping creation."
fi

# Start the server
echo "Starting the server..."
npm start
