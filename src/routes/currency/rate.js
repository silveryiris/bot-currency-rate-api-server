import express from "express"
import "dotenv/config"
import fetchRateData from "../../services/fetchBankOfTaiwanRateCSV.js"
import rateController from "../../controllers/currency/rate.js"
import CacheThat from "cache-that"

const cacheTime = process.env.CACHE_TIME || "2m"
const cache = new CacheThat(cacheTime)
const router = express.Router()

const getCurrencyRates = async (req, res, next) => {
  const botRateDataKey = "bot-rate-data"
  const rateData = cache.getItem(botRateDataKey)
  // Bank of Taiwan API source only support base currency as TWD
  const baseCurrency = "TWD"

  if (rateData !== undefined) {
    res.locals.rateData = rateData
    next()
  } else {
    try {
      const data = await fetchRateData()
      const result = { baseCurrency, ...data }
      cache.setItem(botRateDataKey, result)
      res.locals.rateData = result
      next()
    } catch (err) {
      next(err)
    }
  }
}

router.get("/rate", getCurrencyRates, rateController.getBankCurrencyRate)
router.get("/rate/:currencyCode", getCurrencyRates, rateController.getCurrencyRate)

export default router
