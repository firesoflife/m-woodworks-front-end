import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Gallery = () => {
  const { id } = useParams();
  const [galleryDetails, setGalleryDetails] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function fetchImages() {
    const url = `http://localhost:3000/galleries/${id}`;
    let resp = await axios(url);

    let info = await resp.data;
    setGalleryDetails(info);
    let image = await resp.data.images;
    setGallery(image);
    setLoaded(true);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  if (loaded) {
    return (
      <>
        <div>
          <h1 className='text-2xl text-center py-5 px-10'>
            This is the {galleryDetails.title} Project
          </h1>
          <Link to={'/gallery'} className='text-center justify-center'>
            Go Back to Galleries
          </Link>
          <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
            <div className='flex flex-wrap -m-1 md:-m-2'>
              {gallery.map((item) => {
                const { alt_text, image_url } = item;
                return (
                  <div
                    key={image_url}
                    className='relative flex flex-wrap w-1/3  overflow-hidden '
                  >
                    <div className='w-full p-1 md:p-2 '>
                      <img
                        alt={alt_text}
                        className='block object-cover object-center w-full h-full rounded-lg transition duration-500 hover:scale-125 hover:opacity-75 hover:cursor-pointer'
                        src={image_url}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default Gallery;
