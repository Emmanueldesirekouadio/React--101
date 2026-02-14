// import React, { useState } from "react";
// import useRandomLocation from "./useRandomLocation";
  // import Profile from "./components/Profile";
import { ShoppingList } from "./components";
import Seafood from "./components/Seafood";

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
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-12 px-4">
      {/* <form onSubmit={findLocation}>
        <input type="text" name="longitude" placeholder="Longitude" />
        <input type="text" name="latitude" placeholder="Latitude" />
        <button type="submit">Find Location</button>
      </form>

      {location && (
        <h1 className="text-2xl">{location.results.sunrise}</h1>
      )} */}

{/* <Profile /> */}
{/* <ShoppingList /> */}
<Seafood />
    </div>
  );
};

export default AppExo;
