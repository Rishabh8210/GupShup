import { SmallScreenNavigation } from './small-screen-nav-bar'
import { SmallDownloadButton } from '../ui/small-download-button'
import { Link } from 'react-router'
import { DownloadButton } from '../ui/download-button'
import { LoginButton } from '../ui/login-button'
import { Navbar } from './nav-bar'
import { HamburgMenu } from '../ui/hamburg-menu-button'
import { useState } from 'react'
const MainHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="h-16 lg:h-20 w-full p-5 lg:px-9 border-b border-zinc-400 flex justify-between items-center fixed top-0 left-0">
      <div className='lg:hidden' onClick={() => setNavOpen(!navOpen)}>
        <HamburgMenu />
      </div>
      {navOpen && <SmallScreenNavigation setNavOpen={setNavOpen}/>}
      <Link to={'/'}>
        <img className="h-8 sm:h-9 lg:h-10 xl:h-12" src="/gupshuplogo.svg" alt="#Logo" />
      </Link>
      <div className='lg:hidden'>
        <SmallDownloadButton />
      </div>
      <Navbar />
      <div className='hidden lg:flex items-center justify-center gap-2'>
        <LoginButton />
        <DownloadButton />
      </div>
    </div>
  )
}

export default MainHeader
