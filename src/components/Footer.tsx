import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 md:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/assets/SurgeHealthLogo.webp" alt="Surge Health" width={150} height={40} objectFit="contain" />
            <p className="text-sm text-gray-600 mt-2">contact@surge.health</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="mailto:contact@surge.health" className="text-sm text-gray-600 hover:text-gray-800">Career</a></li>
              <li><a href="mailto:contact@surge.health" className="text-sm text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Subscribe to weekly health insights and tips</h3>
            <form className="flex mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-primary-green focus:border-primary-green"
              />
              <button 
                type="submit" 
                className="bg-primary-green text-white px-4 py-2 rounded-r-full text-sm hover:bg-primary-green-dark transition duration-300"
              >
                →
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2024 Trackfit Software Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
