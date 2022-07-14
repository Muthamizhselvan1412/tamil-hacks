import React from 'react'
import {motion} from 'framer-motion';
 const About = () => {
  return (
    <motion.div 
    initial={{ x: "-300px", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    className='ui raised very padded text container segment' style={{marginTop:'50px'}}>
    <h1>Welcome to About page</h1></motion.div>
  )
}
export default About;