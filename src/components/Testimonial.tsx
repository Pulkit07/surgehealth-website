import React from 'react';
import Image from 'next/image';

// You'll need to add the actual image file to your project
import profileImage from '../assets/pulkit.webp';

const Testimonial = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            We understand you! We have been on this journey ourselves!
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At 25, I developed a chronic autoimmune condition, and ever since I have been on a mission to help people save their lives by preventing chronic conditions and living the best of it. I am on a mission to 10x reduce the number of heart attacks.
          </p>
          <p className="font-bold text-gray-800">Pulkit Goyal</p>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden bg-light-green">
            <div className="absolute inset-4 rounded-lg overflow-hidden">
              <Image
                src={profileImage.src}
                alt="Pulkit Goyal"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
