import React from "react";
import './ecom.css'
const Navbar = () => {
  return (
    <>
      <div class="overlay"></div>
      <nav>
        <dv class="logo">
          <h1>Ecom</h1>
        </dv>
        <div class="items">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>
              <i class="bx bx-cart"></i>
            </li>
            <li>Cart</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
