// Seafood.jsx
import React from "react";
import SeafoodSkeleton from "./seaFoodSkeleton";
import useSeafood from "../useSeafood";


function Seafood() {
  const { seafood, loading, error } = useSeafood();

  if (loading) {
    return (
      <SeafoodSkeleton />
    );
  }
  

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Seafood</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {seafood.map((item) => (
          <div
            key={item.idMeal}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">
              {item.strMeal}
            </h2>
            <p className="text-gray-500 text-sm">
              #{item.idMeal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seafood;
