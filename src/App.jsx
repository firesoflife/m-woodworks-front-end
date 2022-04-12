import { useState } from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NoMatch from './pages/NoMatch';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
