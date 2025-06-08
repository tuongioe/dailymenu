import React from "react";
import logo from "../assets/img/logo.png";
import "../assets/styles/styles.css";

function HeaderComponent() {
  return (
    <div className="Header__Wrapper">
      <div className="flex">
        {/* Logo bên trái */}
        <div className="Header__Logo">
          <img
            src={logo}
            alt=""
            style={{ maxHeight: "120px", maxWidth: "120px" }}
          />
        </div>

        <div className="HomePage__Text">Your menu</div>
        <div className="HomePage__Text">Login</div>
        <div className="HomePage__Text">Account</div>
      </div>
    </div>
  );
}

export default HeaderComponent;
