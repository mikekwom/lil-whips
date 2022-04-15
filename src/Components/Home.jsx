import React from "react";
import "../home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <button className="myButton">Make a Reservation</button>
      </div>
      <img className="logo-banner" src="logo-banner-blue.png"></img>
      <div className="mid-section">
        <div className="mid-section-container">
          <img className="mid-image" src="girl-eating.jpg"></img>
          <div className="mid-section-container-text">
            <h3>Come for the</h3>
            <h2>Food</h2>
          </div>
        </div>
        <div className="mid-section-container">
          <div className="mid-section-container-text">
            <h3>Stay for the</h3>
            <h2>Experience</h2>
          </div>
          <img className="mid-image" src="diner.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
