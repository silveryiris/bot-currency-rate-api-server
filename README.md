# bot-currency-rate-api-server
Fetch csv currency rate from www.bot.com.tw and provides rest api

[![dev packages](https://david-dm.org/silveryiris/bot-currency-rate-api-server.svg)](https://david-dm.org/silveryiris/bot-currency-rate-api-server)


# Usage

It's a standalone api server. you can integrate these middleware by you own.

# Start up server
````
npm run start or npm run start:dev
````

# Config

You can create your own `.env` file and place under the project root.

File example :
````
SERVER_PORT = 5566

CACHE_TIME = 1m
````

Full cache time format support is on [cache-that](https://github.com/silveryiris/cache-that#time-format-support)  

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
