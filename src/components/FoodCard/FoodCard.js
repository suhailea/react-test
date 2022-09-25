import React from "react";
import "./FoodCard.css";
import { foodRecords } from "../../store/data";

function FoodCard() {
  return (
    <div className="food_card">
      <div className="header_label">Foods</div>
      <div className="food">
        {foodRecords.map((foodItems) => {
          return (
            <div className="food_details">
              <div className="food_image">
                <img src={foodItems.imageUrl} alt="" />
              </div>
              <div>
                <span className="food_name">{foodItems.Ingredient}</span> <br />
                <span className="food_description">
                  A safe & healthy solid food
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodCard;
