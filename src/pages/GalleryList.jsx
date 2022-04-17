import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const GalleryList = ({ galleryList, loaded }) => {
  if (loaded) {
    return (
      <div className='h-screen flex flex-col md:py-12'>
        <section className='flex flex-col mx-auto items-center  text-gray-700 xlg:justify-center h-full'>
          <h1 className='text-3xl text-center text-white py-4'>
            Select A Gallery
          </h1>
          <div className='container px-5 py-2  mx-auto lg:pt-12 lg:px-32'>
            <div className='flex flex-wrap -m-1 md:-m-2'>
              {galleryList.map((item) => {
                const { id, title, cover_image_url } = item;
                return (
                  <Link
                    to={`/gallery/${id}`}
                    key={id}
                    className='relative flex flex-wrap lg:w-1/3 md:w-1/2 '
                  >
                    <div className='w-full p-5'>
                      <div className='absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-90 bg-opacity-90 duration-300 rounded-lg'>
                        <h1 className='tracking-wider' key={id}>
                          {title}
                        </h1>
                      </div>
                      <img
                        alt='gallery'
                        className='block object-cover object-center md:w-full w-8/12 m-auto h-full rounded-lg'
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
  } else {
    return <Loading />;
  }
};

export default GalleryList;
