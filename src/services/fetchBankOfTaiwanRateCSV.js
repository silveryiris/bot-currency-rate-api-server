import fetch from "node-fetch"
import csvParser from "papaparse"
import getFileMetaFromHeaders from "./headerFileMeta.js"
import utf8BomRemover from "./utf8BomRemover.js"

const ENDPOINT = "https://rate.bot.com.tw/xrt/flcsv/0/day"

function fixDataFormat(data) {
  return data.map(x => {
    delete x.__parsed_extra
    const entries = Object.entries(x)
    entries[0][0] = utf8BomRemover(entries[0][0])
    return Object.fromEntries(entries)
  })
}

export async function getJson() {
  return fetch(ENDPOINT).then(async res => {
    const meta = getFileMetaFromHeaders(res.headers.raw())
    const raw = await res.text()
    const csvParseConfig = { header: true, skipEmptyLines: true, encoding: "utf-8-sig" }
    const rawData = csvParser.parse(raw, csvParseConfig).data
    const result = fixDataFormat(rawData)

    return { ...meta, data: result }
  })
}

export default getJson
