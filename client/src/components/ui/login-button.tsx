import { MoveUpRightIcon } from 'lucide-react'
import { Link } from 'react-router'

export const LoginButton = () => {
    return (
        <Link to={'/login'} className='py-2 px-5 h-13 w-28 xl:w-32 rounded-full flex items-center justify-center gap-1.5 bg-white border border-black cursor-pointer'>
            <p className='font-semibold'>Login</p>
            <MoveUpRightIcon size={18} strokeWidth={2.5} />
        </Link>
    )
}