import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Item(props) {
    const [itemData, setItemData] = useState(props.itemData);
    const [itemQty, setItemQty] = useState(props.itemData.qty);

    // const handleClick = (e) => {
    //     //call for update 
    //     e.preventDefault();
    //     console.log("Click");
    // }
    
    // const subQty = (e) => {
    //     console.log("subtract",e.target.parentElement.id)
    //     if (itemQty > 0) {
    //         let tempQty = itemQty;
    //         tempQty--;
    //         setItemQty(tempQty);
    //     }
    // }

    // const handleAddToCart = (e) => {
    //     let addQty = itemQty;
    //     let itemId = e.target.parentElement.id;

    //     console.log("adding", addQty, itemId)
    //     props.addToCart(addQty,itemId);
    //     setItemQty(0)
    // }

    return (
        <div key={itemData.id} id={itemData.id} className={"shop-item"} >
            <h2 key={uuidv4()}>{itemData.img}</h2>
            <p key={uuidv4()}>{itemData.name}</p>
            <p key={uuidv4()}>{itemData.price}</p>
            <button key={uuidv4()} id={"sub"} onClick={props.updateCart}>-</button>
            <p key={uuidv4()}>{props.itemData.qty}</p>
            <button key={uuidv4()} id={"add"} onClick={props.updateCart}>+</button>
        </div>
    );
}

export default Item;