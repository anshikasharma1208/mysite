import React from "react";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="home">
      <div className="welcome-box">
        <div>
          <h1>Welcome to Blossom Bay</h1>
        </div>

        <h2>"Let your senses dance with flowers"</h2>

        <div className="button-container">
          <button onClick={() => alert("Successfully subscribed!")}>
            Subscribe
          </button>
        </div>
      </div>
    
      <div className="counter">
        
        <div className="welcome-box">
        <h3>Counter: {count}</h3>
        <div className="button-container">
        <button onClick={increment}>Increment</button>
        <p> <button onClick={decrement}>Decrement</button></p>
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
