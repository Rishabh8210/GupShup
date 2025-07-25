import LargeFooter from "../../components/Common/footer-large"
import MainHeader from "../../components/Common/main-header"
import { HeroSection } from "../../components/Home/HeroSection"

const Home = () => {
    return (
        <div className="min-h-screen h-full w-full flex flex-col bg-amber-50/70 ">
            <MainHeader />
            <HeroSection />
            <LargeFooter />
        </div>
    )
}

export default Home