export function getBankCurrencyRate(req, res) {
  if (res.locals.rateData !== undefined) {
    res.json(res.locals.rateData)
  } else {
    res.json({ error: "No data found!" })
  }
}

export function getCurrencyRate(req, res) {
  const validCurrencyCode = /[a-zA-Z]{3}/
  const currencyCode = req.params.currencyCode
  const rates = res.locals.rateData
  
  if (rates !== undefined && validCurrencyCode.test(currencyCode)) {
    const filtered = rates.data.filter(x => x.currency.toUpperCase() === currencyCode.toUpperCase())
    const result = { ...rates, data: filtered }
    res.json(result)
  } else {
    res.json({ error: "No data found!" })
  }
}

export default { getBankCurrencyRate, getCurrencyRate }
