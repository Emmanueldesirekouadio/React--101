// import React, { useState } from "react";
// import useRandomLocation from "./useRandomLocation";
  // import Profile from "./components/Profile";
import { ShoppingList } from "./components";

const AppExo = () => {
  // const [lat, setLat] = useState("");
  // const [lng, setLng] = useState("");

  // const location = useRandomLocation(lat, lng);

  // const findLocation = (e) => {
  //   e.preventDefault();
  //   setLng(e.target.longitude.value);
  //   setLat(e.target.latitude.value);
  // };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <form onSubmit={findLocation}>
        <input type="text" name="longitude" placeholder="Longitude" />
        <input type="text" name="latitude" placeholder="Latitude" />
        <button type="submit">Find Location</button>
      </form>

      {location && (
        <h1 className="text-2xl">{location.results.sunrise}</h1>
      )} */}

{/* <Profile /> */}
<ShoppingList />
    </div>
  );
};

export default AppExo;
