import express from "express"
import 'dotenv/config'
import sequelize from './db.ts'
import * as Models from './models/models.ts'
import cors from 'cors'
import router from "./routes/index.ts"

const PORT = process.env.PORT || 7000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

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