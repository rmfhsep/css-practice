import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Card.css";

export default function Card() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/EasterEgg");
  };
  const clickHandler2 = () => {
    navigate("/100days");
  };

  return (
    <>
      <button onClick={() => clickHandler()}>EasterEgg</button>
      <button onClick={() => clickHandler2()}>100days</button>;
    </>
  );
}
