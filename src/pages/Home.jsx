import React from 'react';
import Logo from './images/main-logo-white.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='text-center hero-content text-neutral-content'>
        <div className='max-w-md md:w-full w-2/3'>
          <h1 className='mb-5 '>
            <img src={Logo} alt='' />
          </h1>
          <p className='mb-5 md:text-xl text-sm md:visible font-extralight text-white '>
            We have proudly been crafting beautiful projects in and around the
            Winnipeg area for over 10 years.
          </p>
          <div className='md:flex-row flex-col justify-center '>
            <Link to={'/gallery'}>
              <button className='md:btn md:btn-outline md:rounded-none md:text-white z-50 md:hover:bg-white m-4 text-white'>
                Gallery
              </button>
            </Link>
            <Link to={'/about'}>
              <button className='md:btn md:btn-outline md:rounded-none md:text-white z-50 md:hover:bg-white m-4 text-white'>
                About
              </button>
            </Link>
            <Link to={'/contact'}>
              <button className='md:btn md:btn-outline md:rounded-none md:text-white z-50 md:hover:bg-white m-4 text-white'>
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
