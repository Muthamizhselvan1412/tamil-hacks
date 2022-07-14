import React from 'react';
import {motion} from 'framer-motion';


 const Contact = () => {
  return (
    <motion.div
    initial={{ x: "-300px", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    className='ui raised very padded segment text container' style={{marginTop:'50px'}}>
   <h1> Welcome to Contact page</h1></motion.div>
  )
}
export default Contact;