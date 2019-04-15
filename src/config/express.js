import express from 'express'
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import methodOverride from 'method-override'
import config from './constants'

/**
 * app routes import
 */
import taskRouter from '../routes/api/task.router'

/**
 * Express app instance
 */
const app = express()

/**
 * app config middleware
 */
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(helmet())
app.use(compression())

/**
 * app routes register
 */
app.get('/', (req, res) => {

    res.json({
        message: 'Hello from API'
    })

})

app.use('/api/tasks', taskRouter)

/**
 * Catch 404 and forward to error handler
 */
app.use((req, res, next) => {

    const err = new Error('Not Found')
    err.status = 404
    next(err)

})

/**
 * Error Handler
 */
app.use((err, req, res, next) => {

    const status = err.status || 500
    const message = err.message || 'Service Unavailable'

    const response = {
        status: status,
        errors: [`${message}`]
    }

    if (config.isDev) {

        response.error = err

    }

    res.status(status).json(response)

})

export default app
