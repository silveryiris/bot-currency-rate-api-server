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

- baseCurrency
- date
- fileName
- data

### baseCurrency
The base currency with this rates api is fixed with "TWD"

````
{"baseCurrency":"TWD",.....}
````

### date
Request date time with GMT for time zone.
````
{"date":"Thu, 18 Jul 2019 16:06:06 GMT", ...... }
````

### fileName
The source file name on the Bank of Taiwan.
````
{"fileName":"ExchangeRate@201907181600.csv", ...... }
````

### data
Format the currency rates csv file on the Bank of Taiwan to json ,
for better readability and code usage.
````
{
  "baseCurrency":"TWD",
  "date":"Thu, 18 Jul 2019 16:06:06 GMT",
  "fileName":"ExchangeRate@201907181600.csv",
  "data": [
    {
      "currency": "USD",
      "buying": {
        "cash": "30.66500",
        "spot": "31.01500",
        "forward10Days": "30.99500",
        "forward30Days": "30.95500",
        "forward60Days": "30.90000",
        "forward90Days": "30.85100",
        "forward120Days": "30.79900",
        "forward150Days": "30.74700",
        "forward180Days": "30.68700"
      },
      "selling": {
        "cash": "31.33500",
        "spot": "31.11500",
        "forward10Days": "31.09800",
        "forward30Days": "31.06500",
        "forward60Days": "31.01200",
        "forward90Days": "30.96200",
        "forward120Days": "30.91700",
        "forward150Days": "30.87300",
        "forward180Days": "30.83300"
      }
    },
    .......
  ]
}

````
## GET: `/rate/:currencyCode`

Return specific currency rate data

Below codes is result that request with `endpoint`/rate/jpy

````
{
  "baseCurrency": "TWD",
  "date": "Tue, 23 Jul 2019 10:03:24 GMT",
  "fileName": "ExchangeRate@201907231600.csv",
  "data": [
    {
      "currency": "JPY",
      "buying": {
        "cash": "0.27820",
        "spot": "0.28550",
        "forward10Days": "0.28550",
        "forward30Days": "0.28550",
        "forward60Days": "0.28570",
        "forward90Days": "0.28580",
        "forward120Days": "0.28590",
        "forward150Days": "0.28590",
        "forward180Days": "0.28600"
      },
      "selling": {
        "cash": "0.29100",
        "spot": "0.28950",
        "forward10Days": "0.28960",
        "forward30Days": "0.28980",
        "forward60Days": "0.28990",
        "forward90Days": "0.29010",
        "forward120Days": "0.29040",
        "forward150Days": "0.29070",
        "forward180Days": "0.29100"
      }
    }
  ]
}
````

# Test

````
npm test
````

# License

See [license file.](https://github.com/silveryiris/bot-currency-rate-api-server/blob/master/LICENSE)
