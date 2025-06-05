import { ArrowDownToLine } from 'lucide-react'

export const SmallDownloadButton = () => {
    return (
        <button className='p-1.5 sm:p-2 rounded-full bg-orange-400 border border-black cursor-pointer active:scale-105 transition'>
            <ArrowDownToLine size={18} strokeWidth={2.5} />
        </button>
    )
}