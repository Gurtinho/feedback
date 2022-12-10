import { MailAdapter } from '../adapters/mailAdapter'
import { FeedbacksRepository } from '../repositories/feedbacksRepository'

export interface FeedbacksCreateRequest {
    type: string
    comment: string
    screenshot?: string
}

// prisma é inversamente injetado dentro da aplicação
export class SubmitFeedbackServices {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) { }
    async execute(request: FeedbacksCreateRequest) {
        const { type, comment, screenshot } = request
        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })
        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `<p>Imagem: ${screenshot}</p>`,
            ].join('\n')
        })
    } 
}