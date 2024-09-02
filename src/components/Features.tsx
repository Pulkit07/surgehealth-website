import React from 'react';

const Features = () => {
  const features = [
    { icon: '🔒', title: 'Full body diagnostics', description: 'We collect 2000+ markers to get a complete view of your body.' },
    { icon: '🧠', title: 'Understanding your lifestyle', description: 'Our comprehensive lifestyle analysis helps you understand your habits better.' },
    { icon: '📊', title: 'AI base risk assessment', description: 'Analyzing and plotting your comprehensive health data, we calculate your risks.' },
    { icon: '🥗', title: 'Lifestyle improvements', description: 'We believe in a holistic approach to health. Our experts help you in your journey.' }
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[28px] font-bold text-center mb-12 text-gray-800">
          Early detection is best bet for <br />
          <span className="text-primary-green">preventing heart attacks.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold mb-2 text-[18px] text-gray-800">{feature.title}</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
