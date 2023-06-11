'use client'

import Link from "next/link";
import smoothScroll from "@/app/util/smooth_scroll";

type NavBarProps = {
  currentPage?: string;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
  return (
    <nav className= "bg-white py-4 grid grid-cols-4">
      <div className="col-span-1 flex items-center justify-start ml-10">
        <img src="/Mini-bones.svg" alt="Proaktiv logo" className="mr-2"></img>
        <p className="text-3xl">SYNÖVE</p>
      </div>
      <ul className="col-span-2 flex justify-center place-self-center">
        <li className={`mr-10 ${currentPage === 'home' ? 'active' : ''}`}><Link href="/">Hem</Link></li>
        <li className={`mr-10 ${currentPage === 'services' ? 'active' : ''}`}><Link href="/tjanster/">Tjänster</Link></li>
        <li className={`mr-10 ${currentPage === 'business' ? 'active' : ''}`}><Link href="/tjanster/" onClick={() => smoothScroll
        ('corporate-health', '/tjanster')}>Företag</Link></li>
        <li className={`mr-10 ${currentPage === 'camp' ? 'active' : ''}`}>Sweat Baby Sweat</li>
        <li className={`mr-10 ${currentPage === 'ir-sauna' ? 'active' : ''}`}><a href="https://www.synove.se/recoveryroom" target="_blank">Recovery Room</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;