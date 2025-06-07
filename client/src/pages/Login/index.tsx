import PlainHeader from "../../components/Common/plain-header"
import { GetStarted } from "../../components/Login/get-started"
import { LoginForm } from "../../components/Login/login-form"

const Login = () => {
    return (
        <div className="min-h-screen w-full flex flex-col bg-amber-50/70">
            <PlainHeader />
            <div className="pt-12 w-full flex justify-center items-center px-3 sm:px-5 lg:px-9">
                <LoginForm />
            </div>
            <GetStarted />
        </div>
    )
}

export default Login