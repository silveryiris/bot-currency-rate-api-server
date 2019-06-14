import express from "express"

const router = express.Router()

router.get("*", (req, res, next) => {
  const err = new Error(`Request page ${req.originalUrl} is not found!`)
  err.statusCode = 404
  next(err)
})

export default router
