import React from 'react';
import loading from '../pages/images/loading.gif';

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <img src={loading} alt='' />
    </div>
  );
};

export default Loading;
