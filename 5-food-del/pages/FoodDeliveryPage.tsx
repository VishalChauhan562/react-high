import React from "react";
import "./FoodDeliveryPage.css";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { Restaurant } from "../types";

const FoodDeliveryPage : React.FC = () => {
  const restaurants : Restaurant[] = [
    {
      id: 1,
      name: "Piece Of Cake",
      image:
        "https://b.zmtcdn.com/data/pictures/4/19887404/c601f038e58ffda0c4c7664c8f766478_o2_featured_v2.jpg",
      rating: 3.6,
      category: "Bakery",
      price: "₹200 for one",
      deliveryTime: "34 min",
      promoted: true,
    },
    {
      id: 2,
      name: "Domino's Pizza",
      image:
        "https://b.zmtcdn.com/data/pictures/5/100105/43eb28eeff9385c27a7b09030e51a818_o2_featured_v2.jpg",
      rating: 4.2,
      category: "Pizza, Desserts, Beverages",
      price: "₹200 for one",
      deliveryTime: "25 min",
      offer: "₹200 OFF",
    },
    {
      id: 3,
      name: "Cake Cream",
      image:
        "https://b.zmtcdn.com/data/pictures/1/19555181/91801ecb9c9a93a0453e60b69461ed09_o2_featured_v2.jpg",
      rating: "-",
      category: "Bakery",
      price: "₹200 for one",
      deliveryTime: "36 min",
      promoted: true,
      offer: "50% OFF",
    },
  ];

  return (
    <div className="app-container">
      <Header />
      <Body restaurants={restaurants}/>
      <Footer />
    </div>
  );
};

export default FoodDeliveryPage;
