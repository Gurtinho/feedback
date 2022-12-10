import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

function CloseButton() {
    return (
        <Popover.Button className='top-5 right-6 absolute text-zinc-400 hover:text-zinc-100' title='Fechar formulário de feedback'>
            <X weight='bold' className='h-4 w-4'/>
        </Popover.Button>
    )
}

export { CloseButton }