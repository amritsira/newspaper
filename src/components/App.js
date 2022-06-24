import React, {useState} from "react";
import '../styles/App.css';
import Newslist from "./Newslist";
import Weatherinfo from "./Weatherinfo";
const App = () => {
  return (
    <>
      <div className="weather-info">
        <Weatherinfo/>
      </div>

      <div className="container">
        <Newslist/>
      </div>

    </>
  )
}




export default App;