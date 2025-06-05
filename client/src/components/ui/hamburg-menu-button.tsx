import { MenuIcon } from "lucide-react"

export const HamburgMenu = () => {
    return (
        <button className='p-1.5 sm:p-2 lg:hidden rounded-full border cursor-pointer active:scale-105 transition'>
            <MenuIcon size={18} strokeWidth={2.8} />
        </button>
    )
}
