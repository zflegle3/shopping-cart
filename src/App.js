import logoMain from './images/cart-2-light.png';

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './styles/App.css';
import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Cart from "./components/Cart.js";
import inventory from "./inventory.js"

function App() {
  const [cartItemsAll, setCartItems] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [cartSum, setCartSum] = useState(0);
  const [shopItemsAll, setShopItems] = useState(inventory);



  const addToCart = (addQty,itemId) => {
    let cartCopy = cartItemsAll;
    console.log("adding to cart");
    //copy of item to add to cart
    let selectedItem = shopItemsAll.filter(itemSelected => itemSelected.id === itemId)[0];
    //copy of current items in cart that match selected item 
    let existingItems = cartItemsAll.filter(itemSelected => itemSelected.id === itemId)[0];

    if (existingItems) {
      //if the selected item exists in cart alteady, update quantity
      let newQty = existingItems.qty + addQty;
      setCartQtyByItem(existingItems.id,newQty)
    } else {
      //if item doesnt exist in cart add to cart
      selectedItem.qty = addQty;
      cartCopy.push(selectedItem);
      setCartItems(cartCopy);
    }
    sumCart();
  }


  const sumCart = () => {
    console.log("Sum Update");
    let sumNew = 0;
    let qtyNew = 0;
    for (let i=0; i<cartItemsAll.length; i++) {
      qtyNew += cartItemsAll[i].qty;
      sumNew += cartItemsAll[i].price * cartItemsAll[i].qty;
      // console.log(cartItemsAll[i]);
    }
    console.log("Sum Update",qtyNew,sumNew);
    setCartQty(qtyNew);
    setCartSum(sumNew);
    console.log(cartQty);
  }

  const setCartQtyByItem = (itemIdIn,newQty) => {
    console.log(newQty);
    console.log(itemIdIn);
    let cartCopy = [];
    if (newQty === 0) {
      //remove from cart
      console.log("remove item totally");
      cartCopy = cartItemsAll.filter(item => item.id !== itemIdIn);
      console.log(cartCopy);
    } else {
      cartCopy = cartItemsAll.map(item => {
        if (item.id === itemIdIn) {
          item.qty = newQty;
        }
        return item
      });
    }
    console.log(cartCopy);
    setCartItems(cartCopy);
  }

  const updateCart = (e) => {
    console.log("Updating Cart");
    let method = e.target.id;
    let selected = shopItemsAll.filter(itemSelected => itemSelected.id === e.target.parentElement.id)[0];
    let newQty = selected.qty;
    if (method === "add") {
      newQty++;
      console.log(newQty);
      setCartQtyByItem(e.target.parentElement.id,newQty)

    } else if (method === "sub") {
      newQty--;
      console.log(newQty);
      setCartQtyByItem(e.target.parentElement.id,newQty)
    }
    console.log(cartItemsAll);
    // sumCart();
  }

  useEffect(() => {
    console.log(cartQty);
    sumCart();
  });












  return (
    <div className="App">
      <Router>
        <header className="page-header">

          <Link to="/" className="header-logo-all">
            <h1 className="header-title">Shop Title</h1>
            <div className="header-logo">
              <img src={logoMain} alt=""></img>
            </div>
          </Link>

          <ul className="header-nav">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li className="cart-all">
              <Link to="/cart">
                <div className="cart-logo">
                  <img src={logoMain} alt=""></img>
                </div>
                <p className="cart-value">{cartQty}</p>
              </Link>
            </li>

          </ul>
        </header>

        <div className="page-content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/shop" element={<Shop addToCart={addToCart} itemsAll={shopItemsAll}/>}/>
            <Route exact path="/cart" element={<Cart cartSum={cartSum} updateCart={updateCart} cartItemsAll={cartItemsAll}/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
