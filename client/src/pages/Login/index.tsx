import { useState } from "react"
import PlainHeader from "../../components/Common/plain-header"
import { GetStarted } from "../../components/Login/get-started"
import { LoginForm } from "../../components/Login/login-form"
import type { AuthticationAttributes } from "../../types/auth-types"
import { OtpValidation } from "../../components/Login/otp-validation"

const Login = () => {
    const [formData, setFormData] = useState<AuthticationAttributes>({
        email_type: '',
        email: '',
        password: '',
        name: ''
    })

    const [step, setStep] = useState(0);
    
    return (
        <div className="min-h-screen w-full flex flex-col bg-amber-50/70">
            <PlainHeader />
            <div className="pt-12 w-full flex justify-center items-center px-3 sm:px-5 lg:px-9">
                {step === 0 && <LoginForm formData={formData} setFormData = {setFormData} step={step} setStep = {setStep} />}
                {step === 1 && <OtpValidation formData={formData} setFormData = {setFormData} setStep = {setStep} />}
            </div>
            <GetStarted />
        </div>
    )
}

export default Login