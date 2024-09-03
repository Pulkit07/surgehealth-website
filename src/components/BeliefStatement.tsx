import React from 'react';
import Image from 'next/image';

const BeliefStatement = () => {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-light-green relative overflow-hidden">
      {/* Background leaf patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary-green opacity-10 rounded-full"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-green opacity-10 rounded-full"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
          <p className="text-primary-green font-medium text-xl mb-6 leading-relaxed">
            Healing rather than treating
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight md:leading-snug mb-8">
            We believe your body is one beautiful and complex interlinked system.
          </h2>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/meditate.webp"
            alt="Person meditating"
            width={600}
            height={480}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

export default BeliefStatement;
