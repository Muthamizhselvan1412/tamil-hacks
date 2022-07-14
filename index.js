import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App';
// import Singlecmd from './comments/Singlecmd';
// import UserCard from './comments/UserCard';
// import Location from './geoLocation/Location';
// import DisplayLocation from './geoLocation/DisplayLocation';
// import SearchInput from './components/SearchInput';
// import SearchInputPrint from './components/SearchInputPrint';
// import Navbar from './components/navbar/Navbar';
// import Home from './components/navbar/Home';
// import About from './components/navbar/About';
// import Contact from './components/navbar/Contact';
// import ContextApp from './context/ContextApp';
import SearchEngine from './SearchEngine';
// import DatatablePage from './datatable/DatatablePage';
// import DataTableWithIcon from './datatable/DataTableWithIcon';
// import JquerySelectors from './Jqueries/JquerySelectors.js';
// import FramerMotion from './framerMotion/FramerMotion.js';
// import LayOutGroup from './framerMotion/LayoutGroup.js';
// import Transition from './framerMotion/Transition.js';
// import Uuid from './uuid/Uuid.js';




import reportWebVitals from './reportWebVitals';
// import SearchInputPrint from './components/SearchInputPrint';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <BrowserRouter> */}
      {/* <Routes> 
        <Route key='index1' exact path = '/' element={<App />}/>
        <Route key='index2' exact path = 'single-cmd' element={<Singlecmd />}/>
        <Route key='index3' exact path = 'user-card' element={<UserCard />}/>
        <Route key='index4' exact path = 'geo-location' element={<Location />}/>
        <Route key='index5' exact path = 'display-location' element={<DisplayLocation />}/>
        <Route key='index6' exact path = 'search-input' element={<SearchInput />}/>
        <Route key='index7' exact path = 'search-input-print' element={<SearchInputPrint />}/>
        <Route key='index8' exact path = 'navbar' element={<Navbar />}/>
        <Route key='index9' exact path = 'home' element={<Home />}/>
        <Route key='index10' exact path = 'about' element={<About />}/>
        <Route key='index11' exact path = 'contact' element={<Contact />}/> 
        <Route key='index12' exact path = 'search-engine' element={<SearchEngine />}/>
        <Route key='index13' exact path = 'context-app' element={<ContextApp />}/>
        <Route key='index14' exact path = 'data-table' element={<DatatablePage />}/>
        <Route key='index15' exact path = 'data-table-icon' element={<DataTableWithIcon />}/>
        <Route key='index16' exact path = 'jquery' element={<JquerySelectors />}/>
        <Route key='index17' exact path = 'framer-motion' element={<FramerMotion />}/>
        <Route key='index18' exact path = 'layout-group' element={<LayOutGroup />}/>
        <Route key='index19' exact path = 'transition' element={<Transition />}/>
        <Route key='index20' exact path = 'uuid' element={<Uuid />}/>
      </Routes> */}
    {/* </BrowserRouter>  */}
    {/* <SearchInputPrint /> */}
    <SearchEngine />
    </React.StrictMode>
 
);


reportWebVitals();
