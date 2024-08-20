'use client'


import { useState } from 'react';
import NavBarLinks from './navbar_links';
import Link from "next/link";

type NavBarProps = {
  currentPage?: string;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  }

  const desktopMenu: string = "xl:col-span-2 lg:col-span-2 hidden lg:flex justify-center place-self-center text-center";
  const mobileMenu:string = "lg:hidden fixed top-0 left-0 w-full h-1/4 bg-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out";


  return (
    <nav className="bg-white py-4 grid grid-cols-4">
      <div className="col-span-1 flex items-center justify-start ml-10">
        <Link href="/"><img src="/Mini-bones.svg" alt="Proaktiv logo" className="mr-2"></img></Link>
        <Link href="/"><p className="text-3xl">SYNÖVE</p></Link>
      </div>

      {/* Menu for desktop screens */}
      <NavBarLinks ulStyling={desktopMenu} />

      {/* Menu for mobile screens */}
      <NavBarLinks ulStyling={`${mobileMenu} ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} handleMenuClick={handleMenuClick} />


      <div className="lg:hidden col-start-4 col-span-1 flex justify-center items-center">
        {/* Hamburger menu icon for smaller screns */}
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleMenuClick}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
