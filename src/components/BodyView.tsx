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
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Taking a <span className="text-primary-green">360 degree</span> view of your body 
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {bodyViewItems.map((item, index) => (
            <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="mb-4 flex justify-center">
                <Image
                  src={`../assets/${item.icon}.svg`}
                  alt={item.title}
                  width={40}
                  height={40}
                  className='text-primary-green'
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BodyView;
