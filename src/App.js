import React from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error/Error.js"
import Home from "./Pages/Home/Home.js"
import About from "./Pages/About/About.js"
import Navbar from "./Components/Navbar/Navbar.js";
import data from "./data.js"
import Login from "./Pages/Login/Login.js";
// import RestaurantList from "./Components/RestaurantList/RestaurantList.js";



function App() {

console.log(data[0].restaurantName)
  
  
  return(
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/signup" element={<About/>}/> */}
        {/* <Route path="/restaurantList"  element={<RestaurantList/>}/> */}
      </Routes>
    </div>
  )
}

export default App;
