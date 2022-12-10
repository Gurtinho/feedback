import { CloseButton } from '../../CloseButton'
import successImage from '../../../assets/images/messages/checked.png'

interface FeedbackSuccessStepProps {
    onRestartFeedbackRequested: () => void
}

function FeedbackSuccessStep({ onRestartFeedbackRequested }: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className='flex flex-col items-center py-10 w-[304px]'>
                <img src={successImage} className='w-10' />
                <span className='text-xl mt-2'>
                    Agradecemos o feedback!
                </span>
                <button
                    type='button'
                    onClick={onRestartFeedbackRequested}
                    className='p-y px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors'>
                    Novo feedback
                </button>
            </div>
        </>
    )
}

export { FeedbackSuccessStep }