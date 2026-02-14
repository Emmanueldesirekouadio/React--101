import { useEffect, useState } from "react";

function useRandomLocation(lat, lng) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!lat || !lng) return; // 🛑 évite les fetch invalides

    const getData = async () => {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`
      );
      const data = await response.json();
      setLocation(data);
    };

    getData();
  }, [lat, lng]);

  return location;
}

export default useRandomLocation;
