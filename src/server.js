import "dotenv/config"
import app from "./app.js"

app.listen(process.env.SERVER_PORT, () => {
  console.log(`app start on port ${process.env.SERVER_PORT}`)
})
