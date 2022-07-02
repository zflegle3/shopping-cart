import React, { useState, useEffect } from 'react';
import Item from "./Item";
import "../styles/Shop.css";



function Shop(props) {
    const [shopItemsAll, setShopItems] = useState(props.itemsAll);

    const shopItemDivs = shopItemsAll.map((item) =>
        <Item  key={item.id} itemData={item} addToCart={props.addToCart} />
    );

    // useEffect( => {
    //     console.log({Update});
    //   });

    return (
            <div className="shop-content">
                {shopItemDivs}
            </div>
    );
    }

export default Shop;