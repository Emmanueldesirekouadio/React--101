import React from "react";

export default function ItemDescription({ name, description }) {
  return (
    <div>
      <h2 className="font-medium text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
