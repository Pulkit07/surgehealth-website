import React from 'react';

const Hero = () => {
  return (
    <section className="bg-green-50 text-center py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs md:text-sm text-gray-600 mb-3">1 in 3 people die of heart attack, make sure you don&apos;t.</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight">
          Manage your risks for heart attack
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
          High cholesterol, hypertension are key risk factors for heart attacks. Reverse your markers now to reduce your risk of heart attack.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-full text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105">
          Join Waitlist
        </button>
      </div>
    </section>
  );
}

export default Hero;
