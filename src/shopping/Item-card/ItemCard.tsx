import React, { useEffect } from 'react';
import './ItemCard.scss';

function ItemCard() {
  useEffect(()=>{
    const handleResize = ()=>{
      console.log("resized...")
    }
  },[])
  
  return (
    <div className="App" data-testid = "item-list">
        <div>I am a ItemCard</div>
    </div>
  );
}

export default ItemCard;
