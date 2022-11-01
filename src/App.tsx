import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, Watch, Search, NotFound } from './pages';
import { Navbar, Sidebar } from './components';

function App() {

  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{ height: '7.5vh' }}>
        <Navbar setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar} />
      </div>
      <div className='flex' style={{ height: '92.5vh' }}>
        <Sidebar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/watch/:id' element={<Watch />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
