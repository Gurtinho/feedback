import express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3333, () => {
    console.log('running')
})