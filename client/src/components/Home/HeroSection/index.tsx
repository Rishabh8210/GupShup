import { GroupChats } from "./group-chats"
import { HeroMain } from "./hero-main"
import { PrivacyMatters } from "./privacy-matters"
import { SayWhatYouFeel } from "./say-what-you-fell"
import { VideoVoiceCall } from "./voice-video-call"

export const HeroSection = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <HeroMain />
            <VideoVoiceCall />
            <div className="bg-[#010030] flex justify-center items-center w-full">
                <PrivacyMatters />
            </div>
            <GroupChats />
            <SayWhatYouFeel />
        </div>
    )
}
