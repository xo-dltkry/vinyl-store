import express from "express"
import 'dotenv/config'
import sequelize from './db.ts'
import * as Models from './models/models.ts'

const PORT = process.env.PORT || 7000

const app = express()

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