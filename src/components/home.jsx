import React from "react";
import homeImage from '../home.png'

const Home = () => {
  return (
    <>
      <div className="container home" style={{ marginTop: "60px" }}>
        <div className="home-title">
          <h2>Grow your Bussiness with React Demo App</h2>
          <p>
            We provide a best responsive web designs and UI experience to our
            customers
          </p>

          <button className="btn"><a href="/about">Know More</a></button>
        </div>
        <div className="right-side">
          <img src={homeImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
