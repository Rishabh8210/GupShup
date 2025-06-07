import { DownloadButton } from "../../ui/download-button"
import { LoginButton } from "../../ui/login-button"

export const HeroMain = () => {
    return (
        <>
            <div className="min-h-132 lg:h-[55rem] w-full px-5 py-7 flex flex-col lg:flex-row-reverse gap-9 relative">
                <div className="min-h-48 px-5 w-full lg:w-1/2 flex gap-5 flex-col items-start lg:items-end z-10">
                    <div className="pt-24 w-full lg:w-[28rem] flex flex-col items-start gap-3">
                        <img className="h-10 hidden md:flex" src="/received-message.svg" alt="#MSG" />
                        <img className="h-24 hidden md:flex" src="/summer.png" alt="" />
                    </div>
                    <div className="hidden w-[28rem] lg:flex flex-col items-end gap-3 justify-end">
                        <img className="h-10" src="/sended-message.svg" alt="#MSG" />
                        <img className="h-24" src="/crocodile.png" alt="" />
                    </div>
                    <div className="hidden lg:w-[28rem] lg:flex flex-col items-start gap-3">
                        <img className="h-48" src="/image-message.svg" alt="" />
                    </div>
                </div>
                <div className="h-full w-full lg:w-1/2 z-10 lg:px-28 pt-48">
                    <div className="p-5 flex flex-col gap-5 z-10 md:w-80 text-white">
                        <h1 className="text-5xl md:text-6xl md:leading-18 font-semibold font-mono">Message privately</h1>
                        <p className="font-medium">Simple, reliable, private messaging and calling for free*, available all over the world.</p>
                    </div>
                    <div className="w-fit h-fit flex justify-center items-center gap-7 py-7 px-5 z-10">
                        <DownloadButton />
                        <LoginButton />
                    </div>
                </div>
                <div className="absolute h-full w-full top-0 left-0 pt-5 px-3 sm:px-5 lg:px-9">
                    <img className="h-full w-full object-cover rounded-3xl md:rounded-4xl" src="/hero-section.jpg" alt="#LOGO" />
                </div>
            </div>
            <p className="text-right w-full text-[13px] text-zinc-700 py-1 px-3">*Data charges apply. Contact your provider for details.</p>
            <div className="h-fit w-full p-5 gap-12 flex flex-col justify-center items-center">
                <div className="h-44 w-full sm:h-48 md:h-52 flex justify-center items-center sm:w-[90%]">
                    <img className="h-full object-left object-cover" src="/Hero-banner.png" alt="#Heor-Banner" />
                </div>
                <p className="text-2xl md:text-3xl lg:text-5xl text-center w-full px-3 lg:w-[70%] break-words">With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</p>
                <div className="h-44 w-full sm:h-48 md:h-52 flex justify-center items-center sm:w-[90%]">
                    <img className="h-full rotate-180 object-left object-cover" src="/Hero-banner.png" alt="#Heor-Banner" />
                </div>
            </div>
        </>
    )
}
