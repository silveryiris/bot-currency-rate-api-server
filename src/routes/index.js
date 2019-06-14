import express from "express"
import rate from "./currency/rate.js"
import pageNotFound404Error from "./error/pageNotFound.js"

const router = express.Router()

router.use("/", rate)

// keep this on the tail
router.use("/", pageNotFound404Error)

export default router
