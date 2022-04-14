import React from 'react';
import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { title } = useParams();
  console.log();
  return <div>This is the {title} Gallery</div>;
};

export default Gallery;
