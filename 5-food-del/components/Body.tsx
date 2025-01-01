import React from "react";
import { Star } from "lucide-react";
import { BodyProps } from "../types";

const Body : React.FC<BodyProps> = ({ restaurants }) => {
  return (
    <main>
      <section className="restaurants-section">
        <h2>Popular Restaurants</h2>
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <article key={restaurant.id} className="restaurant-card">
              <div className="image-container">
                <img src={restaurant.image} alt={restaurant.name} />
                {restaurant.promoted && (
                  <span className="promoted-tag">Promoted</span>
                )}
                {restaurant.offer && (
                  <span className="offer-tag">{restaurant.offer}</span>
                )}
              </div>
              <div className="restaurant-info">
                <div className="restaurant-header">
                  <h3>{restaurant.name}</h3>
                  <div className="rating">
                    <span>{restaurant.rating}</span>
                    <Star />
                  </div>
                </div>
                <p className="category">{restaurant.category}</p>
                <div className="restaurant-footer">
                  <span>{restaurant.price}</span>
                  <span>{restaurant.deliveryTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;
