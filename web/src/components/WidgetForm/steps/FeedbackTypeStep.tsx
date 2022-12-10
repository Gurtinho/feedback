import { feedbackstypes, FeedbackTypeKey } from '..'
import { CloseButton } from '../../CloseButton'

interface FeedbackTypeStepProps {
    onFeedbacktypeStepChanged: (type: FeedbackTypeKey) => void
}

function FeedbackTypeStep({ onFeedbacktypeStepChanged }: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className='text-xl leading-6'>Deixe seu feedback</span>
                <CloseButton />
            </header>
            <section className='flex py-8 gap-2 w-full'>
            {
                Object.entries(feedbackstypes).map(([key, value]) => {
                    return (
                        <button onClick={() => onFeedbacktypeStepChanged(key as FeedbackTypeKey)} className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-emerald-500 focus:border-emerald-500 focus:outline-none' type='button' key={key}>
                            <img src={value.image.source} alt={value.image.alt} className='w-6'/>
                            <span>{value.title}</span>
                        </button>
                    )
                })
            }
            </section>
        </>
    )
}

export { FeedbackTypeStep }