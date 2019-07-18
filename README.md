# bot-currency-rate-api-server

[![dev packages](https://david-dm.org/silveryiris/bot-currency-rate-api-server.svg)](https://david-dm.org/silveryiris/bot-currency-rate-api-server)

Fetch currency rate from www.bot.com.tw csv file and provides rest api.

# Usage

It's a standalone api server. you can integrate these middlewares by your own.

# Start up server
````
npm run start
````

or 

````
npm run start:dev
````

# Config

You can create your own `.env` file and place under the project root.
All Environment variables are safty fallback with default value if you leave it empty.

### File example :
````
SERVER_PORT = 66666

CACHE_TIME = 20m

CORS_WHITE_LIST = https://exmaple.com , https://www.example.com

CORS_AllOWED_METHODS = GET , POST , PATCH

CORS_AllOWED_HEADERS = Content-Type

````

### Default value without .env file : 
````
SERVER_PORT = 5566

CACHE_TIME = 2m

CORS_WHITE_LIST = true

CORS_AllOWED_METHODS = GET

CORS_AllOWED_HEADERS = Content-Type , Authorization
````

Full cache time format support is on [cache-that](https://github.com/silveryiris/cache-that#time-format-support).

# Default API

## GET: `/rate`

Return json format response.

Full currency rate data on the Bank of Taiwan csv file.

- date
- fileName
- fileType
- fileLength
- data

# Test

````
npm test
````

# License

See [license file.](https://github.com/silveryiris/bot-currency-rate-api-server/blob/master/LICENSE)
