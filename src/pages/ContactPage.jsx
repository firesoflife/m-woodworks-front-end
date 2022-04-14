import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/m-logo-white.svg';

const ContactPage = () => {
  return (
    <div className='contact min-h-screen'>
      <div className='flex flex-col text-white h-screen align-middle'>
        <div className='flex flex-col h-full text-center justify-center items-center pt-4 align-middle'>
          <form
            className='form-box m-3 py-8 min-h-min w-96 text-center z-40'
            action='https://formspree.io/f/mpzoebjn'
            method='POST'
          >
            <h1 className='mb-6  px-8 m-auto'>
              <img className='h-10 w-10' src={Logo} alt='' />
            </h1>

            <div className='panel panel-right w-auto'>
              <div className='panel-content w-auto'>
                <div className='form flex flex-col align-middle max-w-fit mx-auto'>
                  <div className='relative mb-4'>
                    <input
                      className='text-lg p-1 outline-none border-b-2  text-white bg-transparent  '
                      type='text'
                      name='name'
                      placeholder='Full Name'
                      required
                    />
                    <span className='highlight'></span>
                  </div>
                  <div className=' relative mb-4'>
                    <input
                      className='text-lg p-1  outline-none border-b-2 text-white bg-transparent  '
                      type='text'
                      placeholder='Email'
                      name='_replyto'
                      required
                    />
                    <span className='highlight'></span>
                  </div>
                  <div className=' relative mb-4'>
                    <input
                      className='text-lg p-1  outline-none border-b-2 text-white bg-transparent  '
                      type='phone'
                      name='phone'
                      placeholder='Phone Number'
                      required
                    />
                    <span className='highlight'></span>
                  </div>
                  <div className=' flex flex-col mb-4 text-center w-full'>
                    <textarea
                      type='text'
                      name='message'
                      placeholder='Please click here to begin typing your message'
                      className='text-lg p-1  outline-none  text-white bg-zinc-900 bg-opacity-75'
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <div className='flex flex-col'>
                    <button
                      className='btn btn-outline my-4 rounded-none'
                      type='submit'
                      value='submit'
                      name='submit'
                    >
                      Send
                    </button>
                    <Link to={'/'}>
                      <button className='btn rounded-none btn-ghost btn-xs my-4'>
                        Go Home
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
