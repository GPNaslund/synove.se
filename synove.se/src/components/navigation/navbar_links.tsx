import smoothScroll from "@/app/util/smooth_scroll";
import Link from "next/link";

type NavBarProps = {
  currentPage?: string;
  ulStyling?: string;
  handleMenuClick?: () => void;
}

const NavBarLinks: React.FC<NavBarProps> = ({ currentPage, ulStyling, handleMenuClick }) => {
  return (
    <ul className={ulStyling}>
        <li className={`lg:mr-10 ${currentPage === 'home' ? 'active' : ''}`}>
          <Link href="/" onClick={handleMenuClick}>Hem</Link>
        </li>
        <li className={`lg:mr-10 ${currentPage === 'services' ? 'active' : ''}`}>
          <Link href="/tjanster/" onClick={handleMenuClick}>Tjänster</Link>
        </li>
        <li className={`lg:mr-10 ${currentPage === 'business' ? 'active' : ''}`}>
          <Link href="/tjanster/" onClick={() => {
            handleMenuClick!();
            smoothScroll('corporate-health', '/tjanster');
          }
          }>Företag</Link>
        </li>
        <li className={`lg:mr-10 ${currentPage === 'camp' ? 'active' : ''}`}>Sweat Baby Sweat</li>
        <li className={`lg:mr-10 ${currentPage === 'ir-sauna' ? 'active' : ''}`}>
          <a href="https://www.synove.se/recoveryroom" target="_blank" onClick={handleMenuClick}>Recovery Room</a>
        </li>
    </ul>
  );
}

export default NavBarLinks;