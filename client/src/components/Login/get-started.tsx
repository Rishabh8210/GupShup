import { LockKeyhole, MoveUpRightIcon } from 'lucide-react'
import { Link } from 'react-router'

export const GetStarted = () => {
    return (
        <div className='w-full h-fit flex flex-col gap-4 justify-center items-center px-3 sm:px-5 lg:px-9 py-5'>
            <span className='flex justify-center gap-1 items-center flex-wrap'>
                <p className='font-semibold'>Don't have a GupShup account?</p>
                <Link className='flex justify-center items-center group gap-1' to={'/help'}><p className='font-semibold border-b-2 border-blue-600'>Get started</p><MoveUpRightIcon className='group-hover:rotate-45 transition' strokeWidth={1.5} size={16} /> </Link>
            </span>
            <span className='flex justify-center px-5'>
                <LockKeyhole className='h-5' size={16} />
                <p className='text-center text-[13px]'>Your personal message are end-to-end not encrypted</p>
            </span>
        </div>
    )
}
