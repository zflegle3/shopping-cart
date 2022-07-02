import React, { useState, useEffect } from 'react';
import CartItem from "./CartItem.js";
import "../styles/Cart.css";




function Cart(props) {
    // const [cartItemsAll, setCartItems] = useState(props.cartItemsAll);
    // const [cartSum, setCartSum] = useState(props.cartSum);

    if (props.cartItemsAll.length>0) {
        // console.log(cartItemsAll);
        console.log(props.cartItemsAll);
        console.log("Cart populated")
        return (
            <div className="cart-content">
                <div className="cart-items">
                    {props.cartItemsAll.map((item) =><CartItem  key={item.id} itemData={item} updateCart={props.updateCart}/>)}
                </div>
                <div className="cart-total">
                    <p>Subtotal:${props.cartSum}</p>
                    <button>Checkout</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="cart-content">
                <div className="cart-items">
                    <h2>Your Cart is Empty</h2>
                </div>
                <div className="cart-total">
                    <p>Subtotal:${props.cartSum}</p>
                    <button>Checkout</button>
                </div>
            </div>
        );
    }
    }

export default Cart;