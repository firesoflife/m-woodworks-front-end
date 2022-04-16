import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import GalleryList from './pages/GalleryList';
import Gallery from './pages/Gallery';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/galleries')
      .then((resp) => resp.data)
      .then((galleryData) => {
        setGalleryList(galleryData);
        console.log(galleryData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/gallery'
          element={<GalleryList galleryList={galleryList} />}
        />
        <Route
          path='/gallery/:id'
          element={<Gallery galleryList={galleryList} />}
        />
        <Route path='/*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
