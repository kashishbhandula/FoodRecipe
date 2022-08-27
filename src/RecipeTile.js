import React from "react";
import "./recipeTile.css";
export default function RecipeTile(props) {
  const { recipe } = props;
  return (
    <div className="recipeTile">
      <img className="recipeTile_img" src={recipe["recipe"]["image"]} />
      <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}
