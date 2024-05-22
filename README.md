# rentify
Rentify - Where renting meets simplicity

Rentify is a web application designed to simplify the process of renting properties for both landlords and tenants. With Rentify, landlords can easily list their properties and manage their listings, while tenants can search for available properties and express interest in them.
Table of Contents

    Features
    Tech Stack
    Getting Started
        Prerequisites
        Installation
        Setting Up Environment Variables
    Usage
    Contributing
    License

Features

    User Authentication:
        Users can register and log in as landlords or tenants.
    Landlord Flow:
        Landlords can post properties for rent by providing details such as number of bedrooms, bathrooms, and nearby amenities.
        They can view and manage their posted properties.
    Tenant Flow:
        Tenants can browse available rental properties.
        They can filter properties based on criteria such as location, number of bedrooms, etc.
        Tenants can express interest in a property and view landlord contact details.

Tech Stack

    Frontend: React, HTML, CSS
    Backend: Node.js, Express
    Database: MongoDB

Getting Started
Prerequisites

    Node.js installed on your machine
    MongoDB installed and running locally or accessible via a connection string

Installation

    Clone the repository:

    bash

git clone <repository-url>

Navigate to the project directory:

bash

cd rentify-backend

Install dependencies:

bash

    npm install

Setting Up Environment Variables

    Create a .env file in the root directory of the project.

    Add the following environment variables to the .env file:

    dotenv

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

Usage

    Start the server:

    bash

    npm start

    Access the application in your web browser at http://localhost:5000.

Contributing

Contributions are welcome! Feel free to open issues or pull requests.
License

MIT License
