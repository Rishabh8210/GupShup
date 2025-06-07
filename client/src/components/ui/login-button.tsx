import { MoveUpRightIcon } from 'lucide-react'
import { Link } from 'react-router'

export const LoginButton = () => {
    return (
        <Link
            to={'/login'}
            className="py-2 hidden lg:flex px-5 h-13 w-28 xl:w-32 rounded-full items-center justify-center gap-1.5 bg-white border border-black hover:bg-black duration-800 cursor-pointer relative group overflow-hidden"
        >
            <span className="absolute top-full left-1/2 -translate-x-1/2 rounded-full w-60 h-60 bg-black transition-all duration-900 ease-in-out group-hover:-top-10 z-0"></span>
            <p className="font-semibold relative z-10 group-hover:text-white">Login</p>
            <MoveUpRightIcon size={18} strokeWidth={2.5} className="relative z-10 group-hover:text-white" />
        </Link>
    )
}