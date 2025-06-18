import { ChevronRight, Eye, EyeClosed, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"
import { NextButton } from "../ui/next-button"
import type { AuthticationAttributes } from "../../types/auth-types"
import { LoginForm } from "../../components/Login/login-form"
import axios from "axios"

interface FormData {
    formData: AuthticationAttributes
    setFormData: React.Dispatch<React.SetStateAction<AuthticationAttributes>>;
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const OtpValidation = ({ formData, setFormData, setStep }: FormData) => {
    const [otp, setOTP] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const BACKEND_URL = import.meta.env.VITE_API_URL;

    const handleFormClick = async () => {
        if (!otp || otp.length !== 8) {
            setError('Invalid OTP');
            return;
        }

        try {
            const response = await axios.get(`${BACKEND_URL}/auth/verify-otp`, {
                params: {
                    entered_otp: otp,
                    email: formData.email
                }
            })
            
            if(response.data){
                const registerAcc = await axios.post(`${BACKEND_URL}/auth/sign-up`, {
                    ...formData
                })

                if(registerAcc.data){
                    alert("Ho gyii ji registration")
                    navigate('/')
                    
                }
            }

        } catch (error) {
            console.log("Invalid or Expired OTP", error)
            setError('Invalid or Expired OTP')            
        }

        // setStep((prev) => prev - 1);
    }

    return (
        <div className="h-fit min-w-64 w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[55rem] py-10 px-3 sm:px-5 lg:px-9 flex flex-col gap-12 border border-black rounded-2xl bg-white">
            <div className="flex flex-col gap-5 justify-center items-center">
                <h1 className="text-[22px] font-semibold">Enter your OTP</h1>
                <p className="text-sm flex">Linking GupShup account&nbsp; <b> {formData.email} </b>
                    <button onClick={() => setStep(0)} className="text-blue-600 ml-1 cursor-pointer group-hover:text-orange-600">(edit)</button>
                </p>
            </div>

            <>
                <div className="flex flex-col text-center gap-3 justify-center">
                    <label className="text-sm text-center">Enter OTP</label>
                    <input
                        type="text"
                        className="border p-2 rounded-md text-center w-80"
                        placeholder="Enter OTP"
                        onChange={(e) => setOTP(e.target.value)} // Handle OTP input
                    />
                </div>
                <p className="text-lg font-semibold text-red-600">{error}</p>
                <div className="flex justify-center" onClick={() => handleFormClick()}>
                    <NextButton />
                </div>
                
            </>
        </div>
    )
}
