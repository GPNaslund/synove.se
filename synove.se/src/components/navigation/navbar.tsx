'use client'

import Link from "next/link";
import smoothScroll from "@/app/util/smooth_scroll";
import { useState } from 'react';

type NavBarProps = {
  currentPage?: string;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className="bg-white py-4 grid grid-cols-4">
      <div className="col-span-1 flex items-center justify-start ml-10">
        <img src="/Mini-bones.svg" alt="Proaktiv logo" className="mr-2"></img>
        <p className="text-3xl">SYNÖVE</p>
      </div>

      {/* Menu for larger screns */}
      <ul className="xl:col-span-2 lg:col-span-3 hidden lg:flex justify-center place-self-center text-center">
        <li className={`mr-10 ${currentPage === 'home' ? 'active' : ''}`}><Link href="/">Hem</Link></li>
        <li className={`mr-10 ${currentPage === 'services' ? 'active' : ''}`}><Link href="/tjanster/">Tjänster</Link></li>
        <li className={`mr-10 ${currentPage === 'business' ? 'active' : ''}`}><Link href="/tjanster/" onClick={() => smoothScroll
          ('corporate-health', '/tjanster')}>Företag</Link></li>
        <li className={`mr-10 ${currentPage === 'camp' ? 'active' : ''}`}>Sweat Baby Sweat</li>
        <li className={`mr-10 ${currentPage === 'ir-sauna' ? 'active' : ''}`}><a href="https://www.synove.se/recoveryroom" target="_blank">Recovery Room</a></li>
      </ul>

      <div className="lg:hidden col-start-4 col-span-1 flex justify-center items-center">
        {/* Hamburger menu for smaller screns */}
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