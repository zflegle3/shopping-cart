import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "../styles/Home.css";


function Home() {
  return (
        <div className="home-content">
                <Link to="/shop" className="home-shop-link">
                    <div>
                        <p>Shop XXXXXX Now!</p>
                    </div>
                </Link>
        </div>
  );
}

export default Home;