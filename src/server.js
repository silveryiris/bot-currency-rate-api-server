import "dotenv/config"
import app from "./app.js"

const serverPort = process.env.SERVER_PORT || 5566

app.listen(serverPort, () => {
  console.log(`API server start on port ${serverPort}`)
})
