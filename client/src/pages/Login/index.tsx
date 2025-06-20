import { useState } from "react"
import PlainHeader from "../../components/Common/plain-header"
import { GetStarted } from "../../components/Login/get-started"
import { LoginForm } from "../../components/Login/login-form"
import type { AuthticationAttributes } from "../../types/auth-types"
import { OtpValidation } from "../../components/Login/otp-validation-form"
import { ProfileInfo } from "../../components/Login/profile-info-form"
// import { PhoneInfo } from "../../components/Login/phone-info-form"

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
                {step === 0 && <LoginForm formData={formData} setFormData = {setFormData} setStep = {setStep} />}
                {step === 1 && <OtpValidation formData={formData} setStep = {setStep} />}
                {step === 2 && <ProfileInfo formData={formData} setStep={setStep} setFormData = {setFormData} />}
                {/* {step === 3 && <PhoneInfo formData={formData} setFormData={setFormData} />}  */}
            </div>
            <GetStarted />
        </div>
    )
}

export default Login