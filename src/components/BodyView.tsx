import React from 'react';
import Image from 'next/image';

const bodyViewItems = [
  { icon: 'blood-drop', title: 'Blood Markers' },
  { icon: 'bicycle', title: 'Exercise Habit' },
  { icon: 'muscle', title: 'Physical Health' },
  { icon: 'sleep', title: 'Sleeping Habits' },
  { icon: 'meditation', title: 'Stress Management' },
  { icon: 'food', title: 'Food Diet' },
  { icon: 'bca', title: 'Body Composition' },
  { icon: 'dna', title: 'Genetic Predisposition' },
  { icon: 'age_group', title: 'Age Group' },
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
              <div className="mb-2 flex justify-center">
                <Image
                  src={`../assets/${item.icon}.svg`}
                  alt={item.title}
                  width={32}
                  height={32}
                  className='text-primary-green'
                />
              </div>
              <h3 className="text-[14px] font-medium text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BodyView;
