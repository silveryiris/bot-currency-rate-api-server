import app from "../src/app.js"
import { expect } from "chai"
import fetch from "node-fetch"

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
    const res = await fetch(`${endpoint}/test-error`).then(res => res.json())
    expect(res.statusCode).equal(404)
  })
})

describe("Test REST API of fetch Bank of Taiwan currency rate", () => {
  let server = undefined
  const port = 65535
  const endpoint = `http://127.0.0.1:${port}/api`

  beforeEach(() => {
    server = app.listen(port)
  })

  afterEach(() => {
    server.close()
  })

  it("Can response full currency rate with json format", async () => {
    const result = await fetch(`${endpoint}/rate`).then(res => res.json())
    const keys = Object.keys(result)

    expect(keys).members(["date", "fileName", "data"])
    expect(result.data.length).equal(19)
  })

  it("Can response specific currency rate depends on currency code", async () => {
    const currencyCode = "USD"
    const result = await fetch(`${endpoint}/rate/${currencyCode}`).then(res => res.json())
    const keys = Object.keys(result)

    expect(keys).members(["currency", "buying", "selling"])
    expect(result.currency).equal(currencyCode)
  })
})
