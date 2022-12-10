import { useState } from 'react'
import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { Loading } from './Loading'

interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string | null) => void
    screenshot: string | null
}

function ScreenshotButton({ onScreenshotTook, screenshot }: ScreenshotButtonProps) {
    const [isTakePrint, setIsTakePrint] = useState(false)

    // função responsável pelo print
    async function handleTakePrint() {
        setIsTakePrint(true)
        const canvas = await html2canvas(document.querySelector('html')!) // confia no pai !
        const base64image = canvas.toDataURL('image/png')
        onScreenshotTook(base64image)
        setIsTakePrint(false)
    }
    if (screenshot) {
        return (
            <button
                type='button'
                className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zin-100 transition-colors'
                onClick={() => {onScreenshotTook(null)}}
                style={{
                    backgroundImage: `Url(${screenshot})`,
                    backgroundPosition: `right bottom`,
                    backgroundSize: 180
                }}
            >
                <Trash weight='fill' />
            </button>
        )
    }
    return (
        <button
            type='button'
            onClick={handleTakePrint}
            className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zing-700 transition-colors focus:outline-none'
        >
            {isTakePrint ? <Loading /> : <Camera className='w-6 h-6' />}
        </button>
    )
}

export { ScreenshotButton }