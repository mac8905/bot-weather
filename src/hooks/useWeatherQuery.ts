import { useQuery } from "@tanstack/react-query";
import { fetchWeather, WeatherData } from "../services/weather";

export const useWeatherQuery = (location: string) => {
  return useQuery<WeatherData, Error>({
    queryKey: ["weather", location], // Unique key for caching
    queryFn: () => fetchWeather(location), // Function to fetch data
    enabled: !!location, // Only run the query if location is truthy
    retry: false, // Don’t retry on failure
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });
};
