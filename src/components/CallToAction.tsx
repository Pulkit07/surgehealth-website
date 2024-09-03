import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-green-50 text-gray-800 text-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          First sign of heart attack is <br className="hidden sm:inline" />
          <span className="text-green-600">the heart attack itself.</span>
        </h2>
        <p className="text-base sm:text-lg mb-10 text-gray-700 max-w-2xl mx-auto">
          Reduce your risk while you can.
        </p>
        <Link href="https://tally.so/r/w8KYWo" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Get Early Access
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
