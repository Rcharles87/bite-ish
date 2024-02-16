import { useEffect, useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Loading from "./Pages/Loading/Loading.js";
import Error from "./Pages/Error/Error.js";
import Home from "./Pages/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${"https://corsproxy.io/?"}${API_URL}`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
          params: {
            term: "restaurant",
            location: "10475",
          },
        });
        console.log(error);
        if (response.status === 200) {
          setRestaurants(response.data.businesses);
        } else {
          throw new Error(error.toJSON());
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [error]);

  const renderContent = () => {
    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else if (error) {
      return (
        <div>
          <Error error={error} />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home restaurants={restaurants} />} />
          </Routes>
        </div>
      );
    }
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;
