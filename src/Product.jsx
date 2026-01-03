import React, { useState } from "react";
import ItemDescription from "./ItemDescription";

function Product({ name, description, price }) {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <ItemDescription name={name} description={description} />

      <p className="text-lg font-medium text-gray-900 mt-3">
        {price.toLocaleString()} FCFA
      </p>

      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          className="w-8 h-8 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
          disabled={count === 0}
        >
          -
        </button>
        <span className="text-gray-800 w-6 text-center">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="w-8 h-8 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          +
        </button>
      </div>

      {count > 0 && (
        <p className="text-sm text-gray-500 mt-3">
          Total: {(price * count).toLocaleString()} FCFA
        </p>
      )}
    </div>
  );
}

export default Product;
