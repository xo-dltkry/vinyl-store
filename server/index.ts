import express from "express"
import 'dotenv/config'
import sequelize from './db.ts'
import * as Models from './models/models.ts'
import cors from 'cors'
import router from "./routes/index.ts"
import { ErrorHandlingMiddleware } from "./middlewares/ErrorHandlingMiddleware.ts"
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from "url"

const PORT = process.env.PORT || 7000

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(ErrorHandlingMiddleware)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`))
  } catch(e) {
    console.log(e);
  }
}

start()