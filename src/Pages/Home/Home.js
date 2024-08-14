import React from "react";
import "./Home.css"

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading.js";
import Error from "../Error/Error.js";
import RestaurantList from "../../Components/RestaurantList/RestaurantList.js";
import Landing from "../Landing/Landing.js";

// const API_URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;


function Home() {

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false); // need to change back to true when you change api 
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false)
  // ${'https://corsproxy.io/?'}

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios(`${'https://cors-anywhere.herokuapp.com/ '}${API_URL}`, {
  //         headers: {
  //           Authorization: `Bearer ${API_KEY}`,
  //           // 'Access-Control-Allow-Origin': '*',
  //           // Origin: "null",
  //           // Accept: "application/json",
  //         },
  //         params: {
  //           term: "restaurant",
  //           location: "10475",
  //         },
  //       });
  //       console.log(error);
  //       if (response.status === 200) {
  //         setRestaurants(response.data.businesses);
  //       } else {
  //         throw new Error(error.toJSON());
  //       }
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [error]);


  // let restaurantList = restaurants.map((restaurant)=>{
  //   return <RestaurantList key={restaurant.id} restaurant={restaurant} />
  // })
  
  const renderContent = () => {
    if (error) {
      return <Error error={error}/>;
    } else if (loading) {
      return <Loading />
    } else {
      if(loggedIn){
        return <RestaurantList restaurants={restaurants}/>;
      }else{
        return <Landing/>
      }
    }
  };









  return <div className="home">
    {renderContent()}
    {/* {restaurantList} */}
    </div>;
}

export default Home;
