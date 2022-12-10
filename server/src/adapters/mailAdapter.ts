export interface MailAdapterProps {
    subject: string
    body: string
}

export interface MailAdapter {
    sendMail: (data: MailAdapterProps) => Promise<void>
}