import { Link } from "react-router";
import { DownloadButton } from "../ui/download-button";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const LargeFooter = () => {
    return (
        <div className="h-fit w-full px-5 lg:px-9 py-18 gap-10 flex flex-col lg:py-20 justify-between md:justify-center bg-[#010030]">

            <div className="h-fit w-full flex justify-between gap-7 items-center flex-wrap">
                <img className="h-12" src="/gupshuplogo-white.svg" alt="#Logo" />
                <DownloadButton />
            </div>

            <div className="w-full h-fit flex gap-5 flex-wrap justify-between items-center">
                <div className="h-fit w-40 flex flex-col gap-2 p-3">
                     <p className="text-white text-xs font-semibold pb-3">What we do</p>
                     <Link to="/" className="text-white text-lg font-semibold hover:underline">Features</Link>
                     <Link to="/" className="text-white text-lg font-semibold hover:underline">Blog</Link>
                     <Link to="/" className="text-white text-lg font-semibold hover:underline">Security</Link>
                     <Link to="/" className="text-white text-lg font-semibold hover:underline">For business</Link>
                </div>
                <div className="h-fit w-40 flex flex-col gap-2 p-3">
                     <p className="text-white text-xs font-semibold pb-3">Who we are</p>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">About us</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Careers</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Brand Center</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Privacy</p></Link>
                </div>
                <div className="h-fit w-40 flex flex-col gap-2 p-3">
                     <p className="text-white text-xs font-semibold pb-3">Use GupShup</p>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Android</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Iphone</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Mac/Windows</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">GupShup Web</p></Link>
                </div>
                <div className="h-fit w-40 flex flex-col gap-2 p-3">
                     <p className="text-white text-xs font-semibold pb-3">Need Help?</p>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Contact us</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Help Center</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">App</p></Link>
                     <Link to={"/"}><p className="text-white text-lg font-semibold cursor-pointer hover:underline">Security Advisories</p></Link>
                </div>
            </div>

            <div className="h-fit w-full flex justify-between gap-5 items-center flex-wrap">
                <div className="flex flex-col gap-3">
                    <a className="text-white" href="#">Privacy</a>
                    <a className="text-white" href="#">Terms</a>
                    <p className="text-white">@ {new Date().getFullYear()} Gupshup. All Right Reserved.</p>
                </div>
                
                <div className="flex gap-7">
                    <a className="border-1 border-white text-white rounded-full p-2 hover:bg-white hover:text-blue-950 " href=""><Twitter /></a>
                    <a className="border-1 border-white text-white rounded-full p-2 hover:bg-white hover:text-blue-950 " href=""><Instagram /></a>
                    <a className="border-1 border-white text-white rounded-full p-2 hover:bg-white hover:text-blue-950 " href=""><Linkedin /></a>
                    <a className="border-1 border-white text-white rounded-full p-2 hover:bg-white hover:text-blue-950 " href=""><Github /></a>
                </div>
                
            </div>

            
        </div>

    )


}
export default LargeFooter;



