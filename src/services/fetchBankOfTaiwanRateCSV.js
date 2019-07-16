import fetch from "node-fetch"
import getFileMetaFromHeaders from "./headerFileMeta.js"
import SilveryCSV from "silvery-csv"

const ENDPOINT = "https://rate.bot.com.tw/xrt/flcsv/0/day"

export async function getJson() {
  return fetch(ENDPOINT).then(async res => {
    const meta = getFileMetaFromHeaders(res.headers.raw())
    const raw = await res.text()
    const csv = new SilveryCSV()
    const rawArray = csv.csvToArray(raw)

    const dataKeys = [
      "cash",
      "spot",
      "forward10Days",
      "forward30Days",
      "forward60Days",
      "forward90Days",
      "forward120Days",
      "forward150Days",
      "forward180Days"
    ]

    const rates = rawArray.data.map(r => {
      const formating = (o, x, i) => {
        return Object.assign(o, { [dataKeys[i]]: x })
      }

      const buying = r.slice(2, 11).reduce(formating, {})
      const selling = r.slice(12, -1).reduce(formating, {})

      return { currency: r[0], buying, selling }
    })

    return { ...meta, data: rates }
  })
}

export default getJson
