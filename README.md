# Tilbudstracker.dk ⚡
Simple website to track and showcase good discounts/offers on groceries from Danish stores such as Rema 100 and COOP.

Live site: https://www.tilbudstracker.dk/

*Made by Mikkel Bech @ https://www.bechsolutions.dk/*


## About the project
The project is split into two parts; one for the ``api`` and one for the ``client``. 

### Client
The client side of the project is made using Next.js (React) and simply sends requests to the API to show it nicely to the user.

The client side is currently hosted on Vercel.

### API
The API/server side of the project is made using Express.js as the webframework to gather data from the stores. 
The stores does not have public API's and therefore you would have to reverse engineer their sites in order to add new stores.

The data from the stores are stored in a MongoDB database. 

### Clone and setup yourself
1. Clone the project ``git clone https://github.com/BE-CH/tilbudstracker``
2. Run ``yarn install`` in both ``api`` folder and ``client`` folder.
3. Setup a MongoDB database.
4. Create a .env file in both ``api`` and ``client`` folder. See the description below to see what the .env files should contain.
5. Run ``yarn startDev`` or ``yarn startProd`` to concurrently run both the client server and the API in either developer mode or production.

#### .env
The API .env should contain;
```
NODE_ENV
ALGOLIA_API_KEY_REMA (Rema endpoints)
ALGOLIA_APP_ID_REMA (Rema endpoints)
CONNECTION_STRING (MongoDB)
```

The CLIENT .env should contain;
```
NEXT_PUBLIC_API_URL (URL to API - can be set to localhost when testing)
NODE_ENV
```

## Please let me know if you find any issues or would like a feature added! 😃
