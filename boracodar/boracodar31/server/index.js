import express from "express"
import cors from 'cors'
import { downloader } from "./download-video.js"

const app = express()
app.use(cors())

app.get('/audio', async (req, res) => {
  const videoId = req.query.v

  try {
    await downloader(videoId)

    return res.send('OK')
  } catch (error) {
    console.log(error)
    return res.send(error)
  }
})

app.listen(3333, () => console.log('server up'))