import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Card.css";

export default function Card() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/EasterEgg");
  };

  return <button onClick={() => clickHandler()}>click here</button>;
}
