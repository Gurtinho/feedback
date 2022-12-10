import { useState } from 'react'

import bugImage from '../../assets/images/widget/erro.png'
import ideaImage from '../../assets/images/widget/ideia.png'
import otherImage from '../../assets/images/widget/other.png'
import { FeedbackTypeStep } from './steps/FeedbackTypeStep'
import { FeedbackContentStep } from './steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep'

export const feedbackstypes = {
    bug: {
        title: 'Problema',
        image: {
            source: bugImage,
            alt: 'Relate um problema'
        }
    },
    idea: {
        title: 'Ideia',
        image: {
            source: ideaImage,
            alt: 'Deixe sua ideia'
        }
    },
    other: {
        title: 'Outro',
        image: {
            source: otherImage,
            alt: 'Outro Assunto?'
        }
    }
}

// cria uma tipagem com as keys [ 'bug', 'idea', 'other' ]
export type FeedbackTypeKey = keyof typeof feedbackstypes

function WidgetForm() {
    // melhor forma de manipular um estado de variavel
    const [feedbackType, setFeedbackType] = useState<FeedbackTypeKey | null>(null) // useState vai receber um tipo do objeto ou valor null
    const [feedbackSent, setFeedbackSent] = useState(false)
    
    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null) // vai somente passar o valor vazio
    }
    
    return (
        <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
            {
                feedbackSent ? 
                    (
                        <FeedbackSuccessStep
                            onRestartFeedbackRequested={handleRestartFeedback}
                        />
                    ) : (
                        <>
                            {!feedbackType ?
                            (
                                <FeedbackTypeStep
                                    onFeedbacktypeStepChanged={setFeedbackType}
                                />
                            ) :
                            (
                                <FeedbackContentStep
                                    feedbackType={feedbackType}
                                    onRestartFeedbackRequested={handleRestartFeedback}
                                    onFeedbackSent={() => setFeedbackSent(true)}
                                />
                            )}
                        </>
                    )
            }
            <footer className='text-xs text-neutral-400'>
                Feito com <a className='text-emerald-500 font-medium' href="https://pt-br.reactjs.org">React.js</a>
            </footer>
        </div>
    )
}

export { WidgetForm }