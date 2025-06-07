import { ChevronRight, Mail } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"
import { NextButton } from "../ui/next-button";

export const LoginForm = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="h-fit min-w-64 w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[55rem] py-10 px-3 sm:px-5 lg:px-9 flex flex-col gap-12 border border-black rounded-2xl bg-white">
            <div className="flex flex-col gap-5 justify-center items-center">
                <h1 className="text-[22px] font-semibold text-center">Enter your email address</h1>
                <p className="text-center text-sm">Select a email provider and enter your email address</p>
            </div>
            <div className="h-fit w-full flex flex-col justify-center gap-4 items-center">
                <select className="border px-4 h-12 w-62 rounded-3xl border-black">
                    <option>Email</option>
                    <option>Yahoo</option>
                    <option>Microsoft</option>
                    <option>Hotmail</option>
                </select>

                <div className="border rounded-full w-62 gap-2 h-12 px-4 flex items-center">
                    <Mail size={20} />
                    <input
                        type="email"
                        className="w-full outline-0"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full h-fit flex flex-col gap-7 justify-center items-center">
                {/* <button className="h-10 w-24 bg-blue-500 font-semibold text-white border cursor-pointer active:scale-105 transition border-black rounded-full">Next</button> */}
                <NextButton />
                <Link to={'#'} className="flex group justify-center items-center">
                    <p className="border-b group-hover:text-orange-600 group-hover:border-orange-600">Log in with QR code</p>
                    <ChevronRight strokeWidth={1.25} size={20}/>
                </Link>
            </div>
        </div>
    )
}