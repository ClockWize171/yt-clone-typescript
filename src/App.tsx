import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, Watch, Search, NotFound } from './pages';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/watch/:id' element={<Watch />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
