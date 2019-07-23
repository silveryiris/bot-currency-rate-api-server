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

  if (rateData !== undefined) {
    res.locals.rateData = rateData
    next()
  } else {
    try {
      const data = await fetchRateData()
      cache.setItem(botRateDataKey, data)
      res.locals.rateData = data
      next()
    } catch (err) {
      next(err)
    }
  }
}

router.get("/rate", getCurrencyRates, rateController.getBankCurrencyRate)
router.get("/rate/:currency", getCurrencyRates, rateController.getCurrencyRate)

export default router
