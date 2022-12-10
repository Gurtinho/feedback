import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter'
import { prismaFeedbacksRepository } from './prisma/prismaFeedbacksRepository'
import { SubmitFeedbackServices } from './services/SubmitFeedbackServices'

export const router = express.Router()

router.post('/feedbacks', async (request, response) => {
    const { type, comment, screenshot } = request.body
    const prismaFeedbackRepository = new prismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbacksServices = new SubmitFeedbackServices(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )
    await submitFeedbacksServices.execute({
        type,
        comment,
        screenshot
    })
    return response.status(201).send()
})

router.get('/feedbacks', async (request, response) => {
    return response.status(200).send()
})