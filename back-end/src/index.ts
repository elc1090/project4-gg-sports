import express from 'express'
import dotEnvConfig from './configs/dotenv'
import routes from './routes'

dotEnvConfig()
const app = express()
const port = 3001

app.use(express.json())

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
