import { SubmitFeedbackServices } from './SubmitFeedbackServices'

describe('Submit feedback', () => {
    test('Se consegue enviar um feedback', async () => {
        const submitFeedback = new SubmitFeedbackServices(
            { create: async () => { } },
            { sendMail: async () => {} }
        )

        await expect(submitFeedback.execute({
            type: 'bug',
            comment: 'testes',
            screenshot: 'teste.jpg'
        })).resolves.not.toThrow()
    })
})