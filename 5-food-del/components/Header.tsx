import React from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";

const Header : React.FC = () => {
  return (
    <header>
      <nav className="main-nav">
        <h1 className="logo">FoodieExpress</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search for restaurants and food" />
          <Search className="search-icon" />
        </div>
        <div className="nav-actions">
          <button className="cart-button">
            <ShoppingCart />
            <span>Cart</span>
          </button>
          <button className="login-button">Login</button>
          <button className="mobile-menu">
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
