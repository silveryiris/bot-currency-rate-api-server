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

    const rates = rawArray.data.map(r => {
      return { [r[0]]: { bankBuying: r.slice(2, 11), bankSelling: r.slice(12, -1) } }
    })

    return { ...meta, data: rates }
  })
}

export default getJson
