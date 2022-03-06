import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "./../components/Card";
import "./List.css";

export default function List() {
  return (
    <div className="list-head">
      <div className="list-body">
        <Card />
      </div>
    </div>
  );
}
