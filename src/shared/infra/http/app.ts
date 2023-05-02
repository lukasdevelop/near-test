import "reflect-metadata"
import "express-async-errors"
import express from 'express'
import * as Sentry from "@sentry/node";
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

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      //new Tracing.Integrations.Express({ app }),
      // Automatically instrument Node.js libraries and frameworks
      ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
    ],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

  app.use(Sentry.Handlers.requestHandler());



app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cors())

app.use(router)

app.use(Sentry.Handlers.tracingHandler())

app.use(Sentry.Handlers.errorHandler())

app.use(errorMiddleware)


export { app }