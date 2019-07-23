export function getBankCurrencyRate(req, res) {
  if (res.locals.rateData !== undefined) {
    res.json(res.locals.rateData)
  } else {
    res.json({ error: "No data found!" })
  }
}

export function getCurrencyRate(req, res) {
  const validCurrencyCode = /[a-zA-Z]{3}/
  const currencyCode = req.params.currency

  if (res.locals.rateData !== undefined && validCurrencyCode.test(currencyCode)) {
    const [result] = res.locals.rateData.data.filter(x => x.currency.toUpperCase() === currencyCode.toUpperCase())
    res.json(result)
  } else {
    res.json({ error: "No data found!" })
  }
}

export default { getBankCurrencyRate, getCurrencyRate }
