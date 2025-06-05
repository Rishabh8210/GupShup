import { ArrowDownToLine } from 'lucide-react'

export const DownloadButton = () => {
    return (
        <button className='py-2 px-5 h-13 w-36 xl:w-40 rounded-full flex items-center justify-center gap-1.5 bg-orange-400 border border-black cursor-pointer'>
            <p className='font-semibold'>Download</p>
            <ArrowDownToLine size={18} strokeWidth={2.5} />
        </button>
    )
}