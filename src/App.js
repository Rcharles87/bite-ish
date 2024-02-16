import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [restaurants, setRestaurants] = useState([])
 
  
useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get(`${'https://corsproxy.io/?'}${API_URL}`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
        params: {
          "term": "restaurant",
          "location":"10475"

        }
      });
      setRestaurants(response.data.businesses)

      // console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()
},[])

console.log(restaurants)

  return (
    <div className="App">
     hello world   
    </div>
  );
}

export default App;
