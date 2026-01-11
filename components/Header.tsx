
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#050505] z-50">
      <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0H4V4H0V12H4V16H12V12H16V4H12V0ZM12 4V12H4V4H12Z" fill="white"/>
          </svg>
          <span className="text-white font-bold text-lg group-hover:text-primary transition-colors">David Horjet</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-gray">
            <li className="hover:text-white transition-colors cursor-pointer">
              <a href="#home" className="flex items-center"><span className="text-primary font-medium">#</span>home</a>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <a href="#works" className="flex items-center"><span className="text-primary font-medium">#</span>works</a>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <a href="#about" className="flex items-center"><span className="text-primary font-medium">#</span>about-me</a>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <a href="#contact" className="flex items-center"><span className="text-primary font-medium">#</span>contacts</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
