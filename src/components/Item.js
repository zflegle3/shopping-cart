import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import "../styles/Home.css";


function Item(props) {
    const [itemData, setShopItems] = useState(props.itemData);
    const [itemQty, setItemQty] = useState(0);

    const addQty = (e) => {
        console.log("add",e.target.parentElement.id)
        let tempQty = itemQty;
        tempQty++;
        setItemQty(tempQty);
    }
    
    const subQty = (e) => {
        console.log("subtract",e.target.parentElement.id)
        if (itemQty > 0) {
            let tempQty = itemQty;
            tempQty--;
            setItemQty(tempQty);
        }
    }

    const handleAddToCart = (e) => {
        let addQty = itemQty;
        let itemId = e.target.parentElement.id;

        console.log("adding", addQty, itemId)
        props.addToCart(addQty,itemId);
        setItemQty(0)
    }

    return (
        <div key={itemData.id} id={itemData.id} className={"shop-item"} >
            <h2 key={uuidv4()}>{itemData.img}</h2>
            <p key={uuidv4()}>{itemData.name}</p>
            <p key={uuidv4()}>{itemData.price}</p>
            <button key={uuidv4()} onClick={subQty}>-</button>
            <p key={uuidv4()}>{itemQty}</p>
            <button key={uuidv4()} onClick={addQty}>+</button>
            <button key={uuidv4()} onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Item;