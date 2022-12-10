import nodemailer from 'nodemailer'
import { MailAdapter, MailAdapterProps } from '../mailAdapter'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a1c80da0e94873",
        pass: "289087e57ec3fb"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: MailAdapterProps) {
        await transport.sendMail({
            from: 'Equipe feedback <oi@Gustavo>',
            to: 'Gustavo Litter <gustavolitter@gmail.com>',
            subject,
            html: body
        })
    }
}