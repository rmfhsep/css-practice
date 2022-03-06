import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Main.css";

export default function Main() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/list");
  };

  return (
    <div className="main">
      <div className="wrapper">
        <div className="door" onClick={() => clickHandler()}>
          HELLO WORLD
        </div>
      </div>
    </div>
  );
}
