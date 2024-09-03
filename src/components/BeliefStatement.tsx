import React from 'react';
import Image from 'next/image';


const BeliefStatement = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-light-green relative overflow-hidden">
      {/* Background leaf patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-16 -top-16 w-64 h-64 bg-primary-green opacity-10 rounded-full"></div>
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary-green opacity-10 rounded-full"></div>
      </div>
      
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <p className="text-primary-green font-medium text-sm mb-2">Healing rather than treating</p>
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
            We believe your body is one beautiful and complex interlinked system.
          </h2>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/meditate.webp"
            alt="Person meditating"
            width={500}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

export default BeliefStatement;
