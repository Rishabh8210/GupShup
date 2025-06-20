import { Plus, Smile, User } from "lucide-react";
import { useState } from "react";
import { NextButton } from "../ui/next-button";
import type { FormData } from "./login-form";
import axios from "axios";
import { useNavigate } from "react-router";


export const ProfileInfo = ({ formData, setStep, setFormData }: FormData) => {
    const [name, setName] = useState('');
    // const [profilePic, setProfilePic] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate()

    const BACKEND_URL = import.meta.env.VITE_API_URL;

    console.log(formData, setStep);

    async function handleClick() {
        if (!name) {
            setError('Please enter your name')
            return;
        }
        setFormData({ ...formData, name });

        try {
            const registerAcc = await axios.post(`${BACKEND_URL}/auth/sign-up`, {
                ...formData
            })
            if (registerAcc.data) {
                // setStep((prev) => prev + 1);
                navigate('/chat')
            }
        } catch (error) {
            console.log("Error: Failed to save user data", error);
        }
    }


    return (
        <div className="h-fit min-w-64 w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[55rem] py-10 px-3 sm:px-5 lg:px-9 flex flex-col gap-7 border border-black rounded-2xl bg-white justify-center items-center">
            <div className="h-fit w-fit text-center flex flex-col gap-3">
                <h1 className="text-4xl font-semibold">Profile info</h1>
                <p className="text-xl">Please provide your name and an optional profile photo</p>
            </div>
            <div className="h-30 w-30 rounded-full flex justify-center items-end bg-zinc-300 relative">
                <User size={90} />
                <input
                    type="file"
                    className="absolute top-0 h-full w-full z-0 opacity-0"
                />
                <span className="h-10 w-10 flex justify-center rounded-full border-4 border-white items-center bg-orange-500 absolute -bottom-1 -right-1">
                    <Plus color="#FFFFFF" strokeWidth={3} />
                </span>
            </div>

            <div className="h-fit w-full flex justify-center items-center gap-3">
                <input
                    type="name"
                    className="border-b-2 focus:border-blue-700 w-58 focus:outline-0"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    name="name"
                />

                <Smile size={20} />
            </div>
            <div className="h-fit w-fit flex flex-col gap-5 justify-center items-center" onClick={() => handleClick()}>
                <p className="text-base text-red-600 font-semibold">{error}</p>
                <NextButton />
            </div>
        </div>
    )
}