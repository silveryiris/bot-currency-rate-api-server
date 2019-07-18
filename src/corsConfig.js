import dotenv from "dotenv"
dotenv.config()

const formatSourceString = str => {
  return str.split(",").map(x => x.trim())
}

const whiteListSorce = process.env.CORS_WHITE_LIST || "default"
const httpMethodSorce = process.env.CORS_AllOWED_METHODS || "default"
const headerSource = process.env.CORS_AllOWED_HEADERS || "default"

const whiteList = whiteListSorce === "default" ? true : formatSourceString(whiteListSorce)
const allowedMethods = httpMethodSorce === "default" ? "GET" : formatSourceString(httpMethodSorce)
const allowedHeaders = headerSource === "default" ? ["Content-Type", "Authorization"] : formatSourceString(headerSource)

const options = {
  origin: whiteList,
  methods: allowedMethods,
  allowedHeaders: allowedHeaders
}

export default options
