export interface FeedbacksCreateProps {
    type: string
    comment: string
    screenshot?: string
}

export interface FeedbacksRepository {
    create: (data: FeedbacksCreateProps) => Promise<void>
}