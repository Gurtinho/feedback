import { FeedbacksCreateProps, FeedbacksRepository } from '../repositories/feedbacksRepository'
import { prisma } from '../prisma'

export class prismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbacksCreateProps) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }
}