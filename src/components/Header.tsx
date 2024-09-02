import React from 'react';
import Image from 'next/image';
import logo from '../assets/SurgeHealthLogo.webp';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image 
          src={logo} 
          alt="Surge Health" 
          width={200}  // Increased from 150
          height={53}  // Increased proportionally
          objectFit="contain"
          priority
        />
        <nav>
          {/* Add navigation items here if needed */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
