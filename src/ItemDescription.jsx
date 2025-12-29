import React from "react";

export default function ItemDescription({ name, description }) {
  return (
    <div>
      <h2> Name: {name} </h2>
      <h2> Description: {description} </h2>
    </div>
  );
}
