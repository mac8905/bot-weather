import { useState } from "react";
import LocationSearch from "./components/LocationSearch";
import { useWeatherQuery } from "./hooks/useWeatherQuery";
import { Config } from "./config";

function App() {
  const [location, setLocation] = useState("");
  const { data, isError, error } = useWeatherQuery(location);

  return (
    <>
      <LocationSearch onSearch={setLocation} />

      {isError && <p>{error.message}</p>}

      <h2>{data && data.location}</h2>
      <p>{data && data.temp}°C</p>
      <p>{data && data.humidity}% humidity</p>
      {data && (
        <img
          src={`${Config.IMG_BASE_URL}/img/wn/${data.icon}.png`}
          alt="Weather icon"
        />
      )}
    </>
  );
}

export default App;
