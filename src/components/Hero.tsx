import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-green-50 text-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm text-gray-600 mb-4">1 in 3 people die of heart attack, make sure you don&apos;t.</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
          Manage your risks for heart attack
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-10 text-gray-700 max-w-3xl mx-auto">
          High cholesterol, hypertension are key risk factors for heart attacks. Reverse your markers now to reduce your risk of heart attack.
        </p>
        <Link href="https://tally.so/r/w8KYWo" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
            Join Waitlist
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
