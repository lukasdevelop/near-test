import "reflect-metadata"
import "express-async-errors"
import express from 'express'
import { router } from './routes'
import dotenv from 'dotenv'
import { errorMiddleware } from '../../middlewares/errors/error'
import '../../container'

dotenv.config()

const app = express()

app.use(express.json())

app.use(router)

app.use(errorMiddleware)


export { app }