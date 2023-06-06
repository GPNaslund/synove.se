type NavBarProps = {
  currentPage?: string;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage }) => {
  return (
    <nav className="bg-gray-200 py-4 grid grid-cols-4">
      <div className="col-span-1 flex items-center justify-start ml-10">
        <img src="/Mini-bones.svg" alt="Proaktiv logo" className="mr-2"></img>
        <p className="text-3xl">SYNÖVE</p>
      </div>
      <ul className="col-span-2 flex justify-center place-self-center">
        <li className={`mr-10 ${currentPage === 'home' ? 'active' : ''}`}>Hem</li>
        <li className={`mr-10 ${currentPage === 'services' ? 'active' : ''}`}>Tjänster</li>
        <li className={`mr-10 ${currentPage === 'business' ? 'active' : ''}`}>Företag</li>
        <li className={`mr-10 ${currentPage === 'camp' ? 'active' : ''}`}>Sweat Camp</li>
        <li className={`mr-10 ${currentPage === 'ir-sauna' ? 'active' : ''}`}>Recover Room</li>
      </ul>
    </nav>
  );
};

export default NavBar;