import React from 'react';
import { Link } from 'react-router-dom';
import Evan from './images/Evan.png';

const About = () => {
  return (
    <div className='flex-col px-6'>
      <div className='pt-40 w-full h-full flex mt-auto flex-col sm:flex-row flex-grow overflow-hidden'>
        <div className='sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4'>
          <div className='sticky top-0 p-4 w-full text-center'>
            <div className='flex flex-col items-center avatar mb-10'>
              <div className='w-60 rounded-full'>
                <img src={Evan} />
              </div>
              <p className='text-prose'>Evan Peters</p>
            </div>
            <ul className='flex flex-col overflow-hidden content-center text-left justify-between'>
              <Link to={'/'} className='md:text-2xl text-md'>
                Go Home
              </Link>
              <Link to={'/Gallery'} className='md:text-2xl text-md'>
                Go To Gallery
              </Link>
            </ul>
          </div>
        </div>

        <main
          role='main'
          className=' w-full h-full flex-grow p-10 mr-10 overflow-auto align-middle'
        >
          <h2 className=' mb-3 text-3xl'>Who is M Woodwoorks?</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          pariatur iste sunt facere voluptatum animi voluptatem quas soluta
          illum voluptates, corrupti deserunt! Inventore iste culpa ab
          voluptatum recusandae amet laborum autem laboriosam quasi esse
          molestias velit sapiente adipisci quos ea, nostrum dolores nobis
          quibusdam atque earum. Dolore suscipit inventore, neque cumque nam
        </main>
      </div>
    </div>
  );
};

export default About;
