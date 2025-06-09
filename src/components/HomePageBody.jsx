import React from "react";
import grill from "../assets/img/grill.png";
import noodle from "../assets/img/noodle.png";
import salad from "../assets/img/salad.png";
import meat from "../assets/img/meat.png";
import onion from "../assets/img/onion.png";

function HomePageBody() {
  return (
    <div className="HomePageBody__Wrapper">
      <img src={grill} alt="" className="HomePageBody__Image--Grill" />
      <img src={noodle} alt="" className="HomePageBody__Image--Noodle" />
      <img src={salad} alt="" className="HomePageBody__Image--Salad" />
      <img src={meat} alt="" className="HomePageBody__Image--Meat" />
      <img src={onion} alt="" className="HomePageBody__Image--Onion" />
      <div className="HomePageBody__Content">
        <div className="HomePageBody__Cap">Daily Menu</div>
        <div className="HomePageBody__Button--Cover"></div>
        <button className="HomePageBody__Button">About us</button>
        <button className="HomePageBody__Button">Discover more</button>
        <p></p>
      </div>
    </div>
  );
}

export default HomePageBody;
