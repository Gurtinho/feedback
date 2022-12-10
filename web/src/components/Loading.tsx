import { CircleNotch } from 'phosphor-react'

function Loading() {
    return (
        <div className='w-6 h-6 flex items-center justify-center overflow-hidden'>
            <CircleNotch weight='bold' className='w-6 h-6 animate-spin' />
        </div>
    )
}

export { Loading }