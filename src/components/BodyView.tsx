import React from 'react';

const bodyViewItems = [
  { icon: '💉', title: 'Blood Markers' },
  { icon: '🚴', title: 'Exercise Habit' },
  { icon: '💪', title: 'Physical Health' },
  { icon: '😴', title: 'Sleeping Habits' },
  { icon: '🧘', title: 'Stress Management' },
  { icon: '🥗', title: 'Food Diet' },
  { icon: '🧬', title: 'Body Composition' },
  { icon: '🧬', title: 'Genetic Predisposition' },
  { icon: '👥', title: 'Age Group' },
];

const BodyView = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[28px] font-bold text-center mb-12 text-gray-800">
          We take a <span className="text-primary-green">360 degree view of your body</span> to tell <br />you accurate info.
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {bodyViewItems.map((item, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-[14px] font-medium text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BodyView;
