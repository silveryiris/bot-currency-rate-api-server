import "dotenv/config"
import express from "express"
import logger from "morgan"
import compression from "compression"
import routes from "./routes/index.js"

const app = express()
const env = process.env.NODE_ENV

if (env === "development") {
  app.use(logger("combined"))
}

app.use(compression())
app.use(routes)

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500

  res.status(statusCode).json({ ok: false, statusCode: statusCode, message: err.message })
  next()
})

export default app
