import React from 'react';
import {BrowserRouter ,Routes,Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={()=><Navigate to={'/songs'}/>}/>
    <Route path='/songs' Component={Home}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
