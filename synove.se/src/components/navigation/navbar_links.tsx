import smoothScroll from "@/app/util/smooth_scroll";
import Link from "next/link";

type NavBarProps = {
  currentPage?: string;
}

const NavBarLinks: React.FC<NavBarProps> = ({ currentPage }) => {
  return (
    <div>
        <li className={`mr-10 ${currentPage === 'home' ? 'active' : ''}`}><Link href="/">Hem</Link></li>
        <li className={`mr-10 ${currentPage === 'services' ? 'active' : ''}`}><Link href="/tjanster/">Tjänster</Link></li>
        <li className={`mr-10 ${currentPage === 'business' ? 'active' : ''}`}><Link href="/tjanster/" onClick={() => smoothScroll
          ('corporate-health', '/tjanster')}>Företag</Link></li>
        <li className={`mr-10 ${currentPage === 'camp' ? 'active' : ''}`}>Sweat Baby Sweat</li>
        <li className={`mr-10 ${currentPage === 'ir-sauna' ? 'active' : ''}`}><a href="https://www.synove.se/recoveryroom" target="_blank">Recovery Room</a></li>
    </div>
  );
}

export default NavBarLinks;