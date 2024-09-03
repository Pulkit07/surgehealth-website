import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container px-2  flex justify-between ">
        <Image 
          src="/assets/SurgeHealthLogo.webp"
          alt="Surge Health" 
          width={300}
          height={100}  // Add an appropriate height
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
