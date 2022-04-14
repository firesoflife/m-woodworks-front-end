import React from 'react';
import Evan from './images/Evan.png';

const About = () => {
  return (
    <div className='flex-col h-screen'>
      <div className='pt-40 w-full h-full flex mt-auto flex-col sm:flex-row flex-grow overflow-hidden'>
        <div className='sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4'>
          <div className='sticky top-0 p-4 w-full text-center'>
            <div className='avatar mb-10'>
              <div className='w-60 rounded-full'>
                <img src={Evan} />
              </div>
            </div>
            <ul className='flex sm:flex-col overflow-hidden content-center text-left justify-between'>
              <li className='text-2xl'>Go Home</li>
              <li className='text-2xl'>Go To Gallery</li>
              <li className='text-2xl'>Check out our Sponsors</li>
              <li className='text-2xl'>Get Wood</li>
            </ul>
          </div>
        </div>

        <main
          role='main'
          className=' w-full h-full flex-grow p-10 mr-10 overflow-auto align-middle'
        >
          <h2 className='text-center mb-3 underline text-3xl'>
            Learn a bit about M Woodwoorks
          </h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          pariatur iste sunt facere voluptatum animi voluptatem quas soluta
          illum voluptates, corrupti deserunt! Inventore iste culpa ab
          voluptatum recusandae amet laborum autem laboriosam quasi esse
          molestias velit sapiente adipisci quos ea, nostrum dolores nobis
          quibusdam atque earum. Dolore suscipit inventore, neque cumque nam
          placeat maxime quaerat quisquam? Sint animi aliquam temporibus ipsam
          dolores! Nisi inventore in reiciendis ducimus est, aliquam earum
          praesentium similique eligendi natus eaque quae. Officiis modi, iste
          ab, reiciendis sed aspernatur, assumenda hic necessitatibus tempore
          harum nobis?
        </main>
      </div>
    </div>
  );
};

export default About;
