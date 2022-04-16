import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Gallery = ({ galleryList }) => {
  const { title } = useParams();
  const [images, setImages] = useState([]);
  // const [gallery, setGallery] = useState(galleryList);

  useEffect(() => {
    axios
      .get('http://localhost:3000/images')
      .then((resp) => resp.data)
      .then((imageData) => {
        setImages(imageData);
        setGallery(galleryList.id);
      });
  }, []);

  let shownGallery = galleryList;
  console.log(shownGallery);

  const { image_url, gallery_id } = images;
  console.log(images);

  return (
    <>
      <div>This is the {title} Gallery</div>
      {images.map((item) => {
        // const { image_url, gallery_id } = item;
        // console.log(item);
        // return (
        //   <img
        //     alt='gallery'
        //     className='block object-cover object-center w-full h-full rounded-lg'
        //     src={item}
        //   />
        // );
      })}
    </>
  );
};

export default Gallery;
