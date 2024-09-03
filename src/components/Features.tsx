import React from 'react';
import Image from 'next/image';

const Features = () => {
  const features = [
    { icon: '/assets/diagnostics-icon.svg', title: 'Full body diagnostics', description: 'We collect 2000+ markers to get a complete view of your body.' },
    { icon: '/assets/lifestyle-icon.svg', title: 'Understanding lifestyle', description: 'Our comprehensive lifestyle analysis helps you understand your habits better.' },
    { icon: '/assets/risk-assessment-icon.svg', title: 'AI risk assessment', description: 'Analyzing and plotting your comprehensive health data, we calculate your risks.' },
    { icon: '/assets/improvements-icon.svg', title: 'Lifestyle improvements', description: 'We believe in a holistic approach to health. Our experts help you in your journey.' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800">
          Early detection is best bet for{' '}
          <span className="text-primary-green">preventing heart attacks</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 sm:p-6">
              <div className="mb-4 sm:mb-6 flex justify-center items-center h-16 sm:h-20">
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  objectFit="contain"
                />
              </div>
              <h3 className="font-semibold mb-2 sm:mb-4 text-lg sm:text-xl text-gray-800">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
