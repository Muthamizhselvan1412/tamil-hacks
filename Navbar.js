import React from 'react';
import {Link} from 'react-router-dom';
 const Navbar = () => {
  return (
    <nav className='ui raised very padded  segment'>
        <Link className='ui teal inverted segment' to='/search-input-print' >
            Image Search Engine
        </Link>
        <div className='ui right floated header'>
        <button className='ui button'><Link to='/home'>Home</Link></button>
        <button className='ui button'><Link to='/about'>About Us </Link></button>
        <button className='ui button'><Link to='/contact'>Contact Us </Link></button>
        </div>
    </nav>
   
  )
}
export default Navbar;