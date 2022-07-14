import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import '../css/FramerMotion.css'

 const FramerMotion = () => {
  const [cards, setCards] = useState(defaultCards);

  async function addCard() {
    const res = await fetch('https://source.unsplash.com/random');
    if (!res.ok) return;
    const id = uuid()
    const card = { id, img: res.url };
    setCards([...cards, card]);
  }

 function removeCard() {
    setCards(cards.filter((card) => card !== card.id));
  }

  return (
    <div className='app'>
      <div>
        <h1 className="text-center">Sweet Animations!</h1>
      </div>
      <button className="btn btn-success mb-3" onClick={addCard}>
        Add Card
      </button>
      <button className="btn btn-danger mb-3" onClick={removeCard}>
        Remove Card
      </button>
      <div className='list'>
        {cards.map(card => (
          <Card
            card={card}
            setCards={setCards}
            removeCard={removeCard}
            key={card.id} />
        ))}
      </div>
    </div>  
  )
}

export const Card = ({ card, setCards, removeCard }) => {
  function handleRemove() {
    removeCard(card.id);
  }

  return (
    <motion.div initial={{ x: "-300px", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeOut", duration: 2 }}
    drag
    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
    layoutTransition={{ boxShadow:20 }}  
    className="m-2 card" style={{ width: "20rem",displayInline:"block" }}
    >
      <img src={card.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <motion.h5 whileHover={["hover","secondary"]} className="card-title">Cool Image</motion.h5>
      </div>
    </motion.div>
  
  );
}

const defaultCards = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1587900437942-8758241767ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=300",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1586336900429-71f0642f66fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=300",
  },
];
export default FramerMotion;