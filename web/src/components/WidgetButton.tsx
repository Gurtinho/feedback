import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

function WidgetButton() {
    return (
        <Popover className='absolute bottom-4 right-4 flex flex-col items-end'>
            <Popover.Panel><WidgetForm /></Popover.Panel>
            <Popover.Button className='bg-emerald-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots weight='bold' className='h-6 w-6 m-1' />
                <span className='font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>feedback</span>
            </Popover.Button>
        </Popover>
    )
}

export { WidgetButton }