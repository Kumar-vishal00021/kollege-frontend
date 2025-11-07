import University2 from "../pages/University2";

const Header = ({ universityName }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/University Name */}
        <a className="text-2xl font-bold text-blue-600" href="/university1">
          university1
        </a>
        <a className="text-2xl font-bold text-blue-600" href="/university2">
          University2
        </a>
        
        {/* Navigation Links - Responsive: Hamburger on mobile */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#overview" className="hover:text-blue-600">Overview</a></li>
          <li><a href="#courses" className="hover:text-blue-600">Courses</a></li>
          <li><a href="#fees" className="hover:text-blue-600">Fees</a></li>
          <li><a href="#placements" className="hover:text-blue-600">Placements</a></li>
          <li><a href="#facilities" className="hover:text-blue-600">Facilities</a></li>
        </ul>
        
        {/* Mobile Menu Button - Placeholder for simplicity; can expand with state */}
        <div className="md:hidden">
          <button className="text-blue-600">Menu</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;