import { useState } from "react";
import { useWeatherQuery } from "./hooks/useWeatherQuery";
import LocationSearch from "./components/LocationSearch";
import WeatherCard from "./components/WeatherCard";
import { Box, Stack } from "@mui/material";

function App() {
  const [location, setLocation] = useState("");
  const { data, isError, error } = useWeatherQuery(location);

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          backgroundColor: "background.default", // Use theme-based background
        }}
      >
        <Stack spacing={3} sx={{ width: "100%", maxWidth: 400 }}>
          <LocationSearch onSearch={setLocation} />
          {isError && <p>{error.message}</p>}
          {data && <WeatherCard data={data} />}
        </Stack>
      </Box>
    </>
  );
}

export default App;
