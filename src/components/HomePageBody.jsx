import React from "react";
import grill from "../assets/img/grill.png";
import noodle from "../assets/img/noodle.png";
import salad from "../assets/img/salad.png";
import meat from "../assets/img/meat.png";

function HomePageBody() {
  return (
    <div className="HomePageBody__Wrapper">
      <img
        src={grill}
        alt=""
        style={{
          maxWidth: "10rem",
          marginLeft: "15rem",
          marginTop: "3rem",
          transform: "rotate(5deg)",
          filter: "drop-shadow(20px 20px 40px rgba(0,0,0,0.3))",
        }}
      />
      <img
        src={noodle}
        alt=""
        style={{
          maxWidth: "20rem",
          marginLeft: "15rem",
          marginTop: "3rem",
          transform: "rotate(10deg)",
          filter: "drop-shadow(30px 30px 60px rgba(0,0,0,0.3))",
        }}
      />
      <img
        src={salad}
        alt=""
        style={{
          maxWidth: "25rem",
          marginLeft: "6rem",
          marginTop: "3rem",
          transform: "rotate(-20deg)",
          filter: "drop-shadow(30px 30px 60px rgba(0,0,0,0.3))",
        }}
      />
      <img
        src={meat}
        alt=""
        style={{
          maxWidth: "35rem",
          width: "35em",
          marginLeft: "48rem",
          marginTop: "5rem",
          filter: "drop-shadow(30px 30px 60px rgba(0,0,0,0.3))",
        }}
      />
      <div className="HomePageBody__Content">
        <div className="HomePageBody__Cap">Daily Menu</div>
        <button className="HomePageBody__Button--1">About us</button>
        <button className="HomePageBody__Button--2">Discover more</button>
      </div>
    </div>
  );
}

export default HomePageBody;
