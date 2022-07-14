import React from 'react';
import Navbar from './navbar/Navbar.js';
import Animated from './navbar/Animated.js';
import { BrowserRouter } from 'react-router-dom';
 const SearchEngine = () => {
  return (
  
   <div class="">
     <BrowserRouter>
      <Navbar />
      <Animated />
      </BrowserRouter>
    </div>
   
    
  )
}
export default SearchEngine;