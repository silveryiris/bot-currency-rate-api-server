import dotenv from "dotenv"
import app from "./app.js"

dotenv.config()

const serverPort = process.env.SERVER_PORT || 5566

app.listen(serverPort, () => {
  console.log(`API server start on port ${serverPort}`)
})
