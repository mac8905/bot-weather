import axios from "axios";
import { Config } from "../config";

export interface WeatherData {
  temp: number;
  humidity: number;
  location: string;
  icon: string;
  description: string;
}

export const fetchWeather = async (location: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${Config.API_BASE_URL}/weather?q=${location}&units=metric&appid=${Config.API_KEY}`
    );

    return {
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      location: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to fetch weather data"
      );
    }
    throw new Error("Unknown error");
  }
};
