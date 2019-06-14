export function getBankCurrencyRate(req, res) {
  if (res.locals.rateData !== undefined) {
    res.json(res.locals.rateData)
  } else {
    res.json({ error: "No data found!" })
  }
}

export default { getBankCurrencyRate }
