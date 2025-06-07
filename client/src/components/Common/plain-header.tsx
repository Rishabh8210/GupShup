import { SmallScreenNavigation } from './small-screen-nav-bar'
import { Link } from 'react-router'
import { HamburgMenu } from '../ui/hamburg-menu-button'
import { useState } from 'react'
import { Navbar } from './nav-bar'

const PlainHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="h-16 lg:h-20 w-full p-3 sm:px-5 lg:px-9 border-b border-zinc-400 flex justify-start lg:justify-between items-center sticky top-0 left-0 z-20 bg-amber-50/20 backdrop-blur-2xl">
      {/* <div className='lg:hidden absolute left-5' onClick={() => setNavOpen(!navOpen)}>
        <HamburgMenu />
      </div> */}
      {/* {navOpen && <SmallScreenNavigation setNavOpen={setNavOpen}/>} */}
      <Link to={'/'} className='h-fit w-fit'>
        <img className="h-8 sm:h-9 lg:h-10 xl:h-12" src="/gupshuplogo.svg" alt="#Logo" />
      </Link>
      {/* <Navbar /> */}
    </div>
  )
}

export default PlainHeader
