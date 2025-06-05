import { ChevronDown } from "lucide-react"
import { Link } from "react-router"

export const Navbar = () => {
  return (
    <div className="hidden lg:flex">
        <ul className="flex gap-8 xl:gap-12 items-center justify-center">
            <li className="flex items-end justify-center cursor-pointer border-b-2 border-transparent hover:border-orange-500 transition">
                <p className="text-center">Features</p>
                <ChevronDown className="h-5" strokeWidth={1.5}/>    
            </li>
            <Link to={'/privacy'} className="border-b-2 border-transparent hover:border-orange-500 transition"> 
                <li className="text-[17px]">Privacy</li>
            </Link>
            <Link to={'/help-center'} className="border-b-2 border-transparent hover:border-orange-500 transition"> 
                <li className="text-[17px]">Help Center</li>
            </Link>
            <Link to={'/blog'} className="border-b-2 border-transparent hover:border-orange-500 transition"> 
                <li className="text-[17px]">Blog</li>
            </Link>
            <Link to={'/apps'} className="border-b-2 border-transparent hover:border-orange-500 transition"> 
                <li className="text-[17px]">Apps</li>
            </Link>
        </ul>
    </div>
  )
}
