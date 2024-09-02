import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <div className="flex items-center">
            <p className="text-xl font-bold text-gray-800 mr-4">Pulkit Goyal</p>
            <Link href="https://www.linkedin.com/in/pulkitg25/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/_pulkitg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full max-w-[300px] mx-auto aspect-square rounded-lg overflow-hidden bg-light-green">
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
    </section>
  );
}

export default Testimonial;
