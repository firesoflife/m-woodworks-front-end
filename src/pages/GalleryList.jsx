import { Link } from 'react-router-dom';

const GalleryList = ({ galleryList }) => {
  return (
    <div className='h-screen flex flex-col'>
      <section className='flex flex-col mx-auto items-center  text-gray-700 justify-center h-full'>
        <h1 className='text-3xl text-center text-white mt-6'>
          Select A Gallery
        </h1>
        <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            {galleryList.map((item) => {
              const { id, title, cover_image_url } = item;
              return (
                <Link
                  to={`/gallery/${id}`}
                  key={id}
                  className='relative flex flex-wrap w-1/3'
                >
                  <div className='w-full p-1 md:p-2'>
                    <div className='absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-90 bg-opacity-90 duration-300 rounded-lg'>
                      <h1 className='tracking-wider' key={id}>
                        {title}
                      </h1>
                    </div>
                    <img
                      alt='gallery'
                      className='block object-cover object-center w-full h-full rounded-lg'
                      src={cover_image_url}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryList;
