import { ChevronRight, Eye, EyeClosed, Mail } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"
import { NextButton } from "../ui/next-button";
import type { AuthticationAttributes } from "../../types/auth-types"
import { signupSchema } from "../../schemas/auth/sign-up-schema";
import { LoaderButton } from "../ui/loader";
import axios from "axios";

export interface FormData {
    formData: AuthticationAttributes
    setFormData: React.Dispatch<React.SetStateAction<AuthticationAttributes>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const LoginForm = ({ formData, setFormData, setStep }: FormData) => {
    const [email, setEmail] = useState('');
    const [loader, setLoader] = useState(false);
    const [password, setPassword] = useState('');
    const [emailType, setEmailType] = useState('gmail');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const BACKEND_URL = import.meta.env.VITE_API_URL;

    const handleFormClick = async () => {
        const response = signupSchema.safeParse({
            email,
            password,
            email_type: emailType
        })

        if (response.success) {
            setFormData({ ...formData, email, password, email_type: emailType });
            setLoader(true);

            // API call
            try {
                const respone = await axios.post(`${BACKEND_URL}/auth/send-otp`, {
                    email,
                    email_type: emailType
                })

                console.log("Backend Respons", respone.data);
                setStep((prev) => prev + 1);
            } catch (error) {
                console.log("Error while sending OTP", error);
                setError('Failed to send OTP, plese try again')
            }

        } else {
            setError('Please enter valid input');
        }
    }

    return (
        <div className="h-fit min-w-64 w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[55rem] py-10 px-3 sm:px-5 lg:px-9 flex flex-col gap-7 border border-black rounded-2xl bg-white">
            <div className="flex flex-col gap-5 justify-center items-center">
                <h1 className="text-[22px] font-semibold text-center">Enter your email address</h1>
                <p className="text-center text-sm">Select a email provider and enter your email address</p>
            </div>
            <div className="h-fit w-full flex flex-col justify-center gap-4 items-center">
                <select value={emailType} onChange={(e) => setEmailType(e.target.value)} className="border px-4 h-12 w-62 rounded-3xl border-black">
                    <option value={'gmail'}>Gmail</option>
                    <option value={'yahoo'}>Yahoo</option>
                    <option value={'microsoft'}>Microsoft</option>
                    <option value={'hotmail'}>Hotmail</option>
                </select>

                <div className="border rounded-full w-62 gap-2 h-12 px-4 flex items-center">
                    <Mail size={20} />
                    <input
                        type="email"
                        className="w-full outline-0"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="border rounded-full w-62 gap-2 h-12 px-4 flex items-center">
                    {
                        showPassword ? <EyeClosed onClick={() => setShowPassword(!showPassword)} className="cursor-pointer hover:text-black/50 transition-all" size={20} /> : <Eye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer hover:text-black/50 transition-all" size={20} />

                    }
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="w-full outline-0"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                {error && <p className="text-base font-semibold text-red-600">{error}</p>}
            </div>
            <div className="w-full h-fit flex flex-col gap-7 justify-center items-center">
                {/* <button className="h-10 w-24 bg-blue-500 font-semibold text-white border cursor-pointer active:scale-105 transition border-black rounded-full">Next</button> */}
                <div className="h-fit w-fit" onClick={() => handleFormClick()}>
                    {loader ? <LoaderButton /> : <NextButton />}
                </div>

                <Link to={'#'} className="flex group justify-center items-center">
                    <p className="border-b group-hover:text-orange-600 group-hover:border-orange-600">Log in with QR code</p>
                    <ChevronRight strokeWidth={1.25} size={20} />
                </Link>
            </div>
        </div>
    )
}