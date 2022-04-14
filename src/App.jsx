import { useState } from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import GalleryList from './pages/GalleryList';
import Gallery from './pages/Gallery';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<GalleryList />} />
        <Route path='/gallery/:title' element={<Gallery />} />
        <Route path='/*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
