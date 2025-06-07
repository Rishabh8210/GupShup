import { ArrowDownToLine } from 'lucide-react'

export const DownloadButton = () => {
    return (
        <button className='py-2 px-5 h-13 w-36 xl:w-40 rounded-full flex items-center justify-center gap-1.5 bg-orange-400 border hover:bg-black duration-800 border-black cursor-pointer relative group overflow-hidden'>
            <span className="absolute top-full left-1/2 -translate-x-1/2 rounded-full w-64 h-64 bg-black transition-all duration-900 ease-in-out group-hover:-top-10 z-0"></span>
            <p className='font-semibold group-hover:text-white z-10'>Download</p>
            <ArrowDownToLine size={18} strokeWidth={2.5} className='relative group-hover:text-white z-10'/>
        </button>
    )
}