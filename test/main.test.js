import app from "../src/app.js"
import chai from "chai"
import fetch from "node-fetch"

const { expect } = chai

describe("Start up", () => {
  it("Can starup server without errror.", () => {
    const port = 65535
    const server = app.listen(port)
    expect(server.address().port).equal(port)
    server.close()
  })
})

describe("API server basic", () => {
  let server = undefined
  const port = 65535
  const endpoint = `http://127.0.0.1:${port}`

  beforeEach(() => {
    server = app.listen(port)
  })

  afterEach(() => {
    server.close()
  })

  it("Can handle 404 page not found error", async () => {
    const res = await fetch(`${endpoint}/test-error`).then((res) => res.json())
    expect(res.statusCode).equal(404)
  })
})

describe("Test REST API of fetch Bank of Taiwan currency rate", () => {
  let server = undefined
  const port = 9000
  const endpoint = `http://127.0.0.1:${port}/api`

  beforeEach(() => {
    server = app.listen(port)
  })

  afterEach(() => {
    server.close()
  })

  it("Can response full currency rate with json format", async () => {
    const baseCurrency = "TWD"
    const response = await fetch(`${endpoint}/rate`)
    const result = await response.json()
    const keys = Object.keys(result)

    expect(keys).members(["baseCurrency", "date", "fileName", "data"])
    expect(result.baseCurrency).equal(baseCurrency)
    expect(result.data.length).equal(19)
  })

  it("Can response specific currency rate depends on currency code", async () => {
    const baseCurrency = "TWD"
    const currencyCode = "USD"
    const response = await fetch(`${endpoint}/rate/${currencyCode}`)
    const result = await response.json()
    const keys = Object.keys(result)
    const dataKeys = Object.keys(result.data[0])

    expect(keys).members(["baseCurrency", "date", "fileName", "data"])
    expect(result.baseCurrency).equal(baseCurrency)
    expect(result.data.length).equal(1)
    expect(dataKeys).members(["currency", "buying", "selling"])
    expect(result.data[0].currency).equal(currencyCode)
    expect(Object.keys(result.data[0].buying).length).equal(9)
    expect(Object.keys(result.data[0].selling).length).equal(9)
  })
})
