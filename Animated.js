import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import SearchInput from '../components/SearchInput.js';
import SearchInputPrint from '../components/SearchInputPrint.js';
import { AnimatePresence } from 'framer-motion';

 function Animated(){
  return (
    <AnimatePresence>
     <Routes>
        <Route key='index6'  path = 'search-input' element={<SearchInput />}/>
        <Route key='index7'  path = 'search-input-print' element={<SearchInputPrint />}/>
        <Route key='index9'  path = 'home' element={<Home />}/>
        <Route key='index10' path = 'about' element={<About />}/>
        <Route key='index11' path = 'contact' element={<Contact />}/>
      </Routes>
      </AnimatePresence>
  )
}
export default Animated;