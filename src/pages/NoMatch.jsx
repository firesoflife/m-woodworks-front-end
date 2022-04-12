import React from 'react';

import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='text-center hero-content text-neutral-content'>
        <div className='max-w-lg text-justify'>
          <h2 className='mb-5 text-5xl font-bold text-white'>
            Hammer? ... Check
          </h2>
          <h2 className='mb-5 text-5xl font-bold text-white'>
            Nails? ... Check
          </h2>
          <h2 className='mb-5 text-5xl font-bold text-white'>
            Saw? ... Check, Check
          </h2>
          <h2 className='mb-5 text-5xl font-bold text-white'>
            Website? Oh shoot...
          </h2>
          <h2 className='mb-5 text-2xl font-bold text-white text-center'>
            That's what we are missing.
          </h2>

          <p className='mb-5 text-lg text-amber-400 text-center'>
            Try loading the homepage again to start over
          </p>
          <div className='flex justify-center space-x-11'>
            <Link to={'/'}>
              <button className='btn btn-outline rounded-none'>
                Go Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
