import { ArrowDownToLine, Facebook, Instagram, Minus, MoveRight, Plus, Twitter, X, Youtube } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"
import { dropdownData } from "../../constant/dropdown-data"

interface ICloseButton {
    setNavOpen: (val: boolean) => void
}

export const SmallScreenNavigation = ({ setNavOpen }: ICloseButton) => {
    const [dropdownFeatures, setDropdownFeatures] = useState(false);
    return (
        <div className="min-h-screen lg:hidden h-full w-screen absolute top-0 left-0 bg-white transition overflow-y-auto">
            <div className="h-18 w-full border-b border-zinc-400 flex p-5 items-center justify-center relative">
                <X size={22} className="absolute left-5 cursor-pointer" strokeWidth={2} color="#000000" onClick={() => setNavOpen(false)} />

                {/* <button className='p-1.5 absolute left-5 lg:hidden rounded-full border cursor-pointer active:scale-105 transition' onClick={() => setNavOpen(false)} >
                    <X size={18} strokeWidth={2.5} color="#000000" />
                </button> */}
                <img className="h-9" src="/gupshuplogo.svg" alt="#LOGO" />
            </div>
            <div className="h-fit w-full">
                 <Link to={'/login'} className="h-20 px-5 w-full flex items-center border-b border-zinc-300">
                    <p className="text-3xl">Login</p>
                </Link>
                <Link to={'/'} className="h-20 px-5 w-full flex items-center border-b border-zinc-300">
                    <p className="text-3xl">Home</p>
                </Link>
                <div className="min-h-20 w-full flex flex-col items-center border-b border-zinc-300">
                    <div className="h-20 w-full px-5 flex items-center justify-between cursor-pointer" onClick={() => setDropdownFeatures(!dropdownFeatures)}>
                        <p className="text-3xl">Features</p>
                        {
                            !dropdownFeatures ? <Plus size={24} className="cursor-pointer" /> : <Minus className="cursor-pointer" size={24} />
                        }
                    </div>
                    {
                        dropdownFeatures && <DropdownFeaturesNav />
                    }
                </div>
                <Link to={'/privacy'} className="h-20 px-5 w-full flex items-center border-b border-zinc-300">
                    <p className="text-3xl">Privacy</p>
                </Link>
                <Link to={'/help-center'} className="h-20 px-5 w-full flex items-center border-b border-zinc-300">
                    <p className="text-3xl">Help Center</p>
                </Link>
                <Link to={'/blog'} className="h-20 px-5 w-full flex items-center border-b border-zinc-300">
                    <p className="text-3xl">Blog</p>
                </Link>
                <Link to={'/apps'} className="h-20 px-5 w-full flex items-center border-b border-zinc-300">
                    <p className="text-3xl">Apps</p>
                </Link>
            </div>
            <div className="h-fit md:h-52 bg-blue-900 w-full flex flex-col md:flex-row items-center border-b border-blue-600">
                <div className="h-26 w-full border-b border-blue-600 md:border-0 px-5 flex flex-col md:flex-row items-center justify-center md:justify-between">
                    <button className='py-2 px-5 h-13 w-78 rounded-full flex items-center justify-center gap-1.5 bg-orange-400 border border-black cursor-pointer'>
                        <p className='font-semibold'>Download</p>
                        <ArrowDownToLine size={18} strokeWidth={2.5} />
                    </button>
                </div>
                <div className="h-26 w-full flex  justify-center items-center gap-6">
                    <button className='p-3 h-fit rounded-full border border-white cursor-pointer active:scale-105 transition' onClick={() => setNavOpen(false)} >
                        <Twitter size={24} color="#ffffff" />
                    </button>
                    <button className='p-3 h-fit rounded-full border border-white cursor-pointer active:scale-105 transition' onClick={() => setNavOpen(false)} >
                        <Youtube size={24} color="#ffffff" />
                    </button>
                    <button className='p-3 h-fit rounded-full border border-white cursor-pointer active:scale-105 transition' onClick={() => setNavOpen(false)} >
                        <Instagram size={24} color="#ffffff" />
                    </button>
                    <button className='p-3 h-fit rounded-full border border-white cursor-pointer active:scale-105 transition' onClick={() => setNavOpen(false)} >
                        <Facebook size={24} color="#ffffff" />
                    </button>
                </div>
            </div>
            <div className="h-20 px-5 flex text-white font-semibold flex-col justify-center bg-blue-900 w-full">
                <Link className="text-[14px]" to={'legal'}>
                    Terms & Privacy Poilcy
                </Link>
                <p className="text-[12px]">2025 © GupShup LLC</p>
            </div>
        </div>
    )
}


export const DropdownFeaturesNav = () => {
    return (
        <div className="h-fit w-full px-5 pb-2 flex flex-col gap-2">
            {
                dropdownData.map((data, ind) => {
                    return (
                        <Link key={ind} to={data.route} className="h-fit pb-2 w-full gap-2 flex items-center group">
                            <div className="p-2 rounded-full border group-hover:bg-blue-500/90 cursor-pointer active:scale-105 transition">
                                <data.icon className="group-hover:text-white" size={20} strokeWidth={2.5} />
                            </div>
                            <p className="text-[17px] border-b-2 border-transparent group-hover:border-blue-400 transition">{data.name}</p>
                            <MoveRight size={16} strokeWidth={1.5} />
                        </Link>
                    )
                })
            }
        </div>
    )
}