import React from "react";
import "./FoodItems.css";
import FoodCard from "../FoodCard/FoodCard";

function FoodItems() {
  return (
    <div className="food_items">
      <div className="header">Search</div>
      <div className="search_input">
        <i class="fa fa-user icon"></i>
        <input
          class="input-field"
          type="text"
          placeholder="Username"
          name="usrnm"
        />
      </div>
      <div className="food_card">
           <FoodCard  />;
      </div>
    </div>
  );
}

export default FoodItems;
