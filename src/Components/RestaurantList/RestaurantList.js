import React from "react";
import "./RestaurantList.css"

function RestaurantList() {
  // console.log(restaurant);

  // let location = `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.zip_code}`;

  // console.log(location);

  return (
    <div className="restaurantList-container">
      restaurant list
      {/* <div className="restaurant-container">
        <div>
        <img src={restaurant.image_url} alt="" />
        </div>
        <div className="info">
        <h4>name: {restaurant.name}</h4>
        <h4>{restaurant.rating}</h4>
        </div>
        {/* <h4>
        {location}
      </h4> */}
      {/* </div> */} 
    </div>
  );
}

export default RestaurantList;
