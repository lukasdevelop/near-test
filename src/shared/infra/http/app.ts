import "reflect-metadata"
import "express-async-errors"
import express from 'express'
import { router } from './routes'
import dotenv from 'dotenv'
import { errorMiddleware } from '@shared/middlewares/errors'
import  rateLimiter  from '@shared/middlewares/rateLimiter'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../../../swagger.json'
import '@shared/container'
import cors from "cors"

dotenv.config()

const app = express()

app.use(rateLimiter)

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cors())

app.use(router)

app.use(errorMiddleware)


export { app }