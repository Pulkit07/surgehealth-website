import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary-green text-white">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          First sign of heart attack is <br className="hidden md:inline" />
          the heart attack itself.
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Reduce your risk while you can.
        </p>
        <button className="bg-white text-primary-green px-6 py-2.5 rounded-full font-semibold text-sm md:text-base hover:bg-opacity-90 transition duration-300">
          Get Early Access
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
