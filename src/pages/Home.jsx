import React from 'react';
import Logo from './images/main-logo-white.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='text-center hero-content text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>
            <img src={Logo} alt='' />
          </h1>
          <p className='mb-5 text-xl font-extralight text-white'>
            We have proudly been crafting beautiful projects in and around the
            Winnipeg area for over 10 years. Come on in, get to know us, and
            make sure to check out the Gallery to see some of our latest
            projects.
          </p>
          <div className='flex justify-center space-x-11'>
            <Link to={'/gallery'}>
              <button className='btn btn-outline rounded-none text-white z-50 hover:bg-white'>
                Gallery
              </button>
            </Link>
            <Link to={'/about'}>
              <button className='btn btn-outline rounded-none text-white hover:bg-white'>
                About
              </button>
            </Link>
            <Link to={'/contact'}>
              <button className='btn btn-outline rounded-none text-white hover:bg-white'>
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
