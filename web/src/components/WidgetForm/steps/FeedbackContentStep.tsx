import { FormEvent, useState } from 'react'
import { ArrowLeft } from 'phosphor-react'
import { FeedbackTypeKey, feedbackstypes } from '..'
import { CloseButton } from '../../CloseButton'
import { ScreenshotButton } from '../../ScreenshotButton'
import { api } from '../../../Api'
import { Loading } from '../../Loading'

interface FeedbackTypeProps {
    feedbackType: FeedbackTypeKey
    onRestartFeedbackRequested: () => void
    onFeedbackSent: () => void
}

function FeedbackContentStep({ feedbackType, onRestartFeedbackRequested, onFeedbackSent }: FeedbackTypeProps) {
    const feedbackTypeInfo = feedbackstypes[feedbackType]
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const [isSendingFeedback, setIsSendingFeeback] = useState(false)

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()
        setIsSendingFeeback(true)
        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot
        })
        onFeedbackSent()
    }

    return (
        <>
            <header>
                <button
                    className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
                    onClick={onRestartFeedbackRequested}
                >
                    <ArrowLeft weight='bold' className='w-4 h-4' />
                </button>
                <span className='text-xl leading-6 flex items-center gap-2'>
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
                    { feedbackTypeInfo.title }
                </span>
                <CloseButton />
            </header>
            <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
                <textarea
                    className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin' 
                    placeholder='Conte o que está acontecendo...'
                    onChange={event => setComment(event.target.value)}
                />
                <footer className='flex gap-2 mt-2'>
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    <button
                        type='submit'
                        disabled={comment.length === 0 || isSendingFeedback}
                        className='font-bold p-2 bg-emerald-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-emerald-400 focus:outline-none transition-colors disabled:opacity-50 disabled:hover:bg-emerald-500'
                    >
                        {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
                    </button>
                </footer>
            </form>
        </>
    )
}

export { FeedbackContentStep }