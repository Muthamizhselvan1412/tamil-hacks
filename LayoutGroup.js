// import { LayoutGroup, motion,AnimateSharedLayout } from "framer-motion";
// import React,{useState} from 'react';
//  function LayOutGroup() {
//   return (
//     <LayoutGroup>
//       <Submenu />
//       <Submenu />
//     </LayoutGroup>
//   )
// }

// function Submenu({ children }) {
//   const [isOpen, setIsOpen] = useState(true)
  
//   return (
//     <motion.ul
//       layout
//       style={{ height: isOpen ? "auto" : 40 }}
//     >
  
// <AnimateSharedLayout>
//   {isOpen ? <motion.div layoutId="modal" /> : null}
// </AnimateSharedLayout>
// <AnimateSharedLayout>
//   {isOpen ? <motion.div layoutId="modal" /> : null}
// </AnimateSharedLayout>
//       {children}
//     </motion.ul>
//   )
// }
import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
 import "../css/LayoutGroup.css";


export default function LayOutGroup() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content /> 
        }</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
 
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="text-danger">hello</p>
      
    </motion.div>
    
  );
}

const items = [0, 1, 2,3];

// export default LayOutGroup; 