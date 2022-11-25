import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/accueil" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
          <Route path="/pokemon" element={<Pokemon />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
// rsc
export default App;