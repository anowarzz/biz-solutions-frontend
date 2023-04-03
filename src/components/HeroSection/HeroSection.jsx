import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-28 lg:max-w-lg lg:pr-5">
    
          <h2 className="mb-5  text-xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl  uppercase py-4 ">
            Let us take care of
            <br className="hidden md:block" />
            <h2 className='pt-2'>your <span className='text-blue-700'>business</span> </h2>
       
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Our cloud-based platform delivers cutting-edge technology and tools to help your organization streamline operations, increase efficiency, and achieve your goals. With our scalable and customizable software solutions.
          </p>
          <div className="flex items-center">
            <Link
              to="/login"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Join Today
            </Link>
            <Link
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors border p-2 duration-200 hover:text-purple-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default HeroSection;
