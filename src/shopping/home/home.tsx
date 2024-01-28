import React, { useEffect, useState } from 'react';
import './home.scss';
import ItemCard from '../Item-card/ItemCard';

function Home() {
  const [show, setShow] = useState(false)
  const showItems =()=>{
    setShow(!show);
  }
 
  return (
    <div className="App">
        <div>CARDS LIST</div>
        <button data-testid="show-card" onClick={showItems}>Show Cards</button>
        {
          show && <ItemCard></ItemCard>
        }
    </div>
  );
}

export default Home;
