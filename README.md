# 🌤️ BotWeather - Weather App

<!-- Header Badges -->
<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Material UI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

</div>

A sleek weather application built with React, TypeScript, and Material UI, powered by OpenWeather API.

**[API Documentation](https://openweathermap.org/api)**

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature (ºC) and humidity
- 🌈 Dynamic weather icons and card animations
- ⏳ Loading spinner with smooth transitions
- ❌ User-friendly error handling

Desired future enhancements
- 🌡️ Real-time temperature (ºC/ºF) and humidity
- 📍 Auto-detect location via geolocation
- 🎨 Consistent UI with dark/light mode support

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/mac8905/bot-weather.git

cd bot-weather
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure API Key
1. Get your free [OpenWeather API Key](https://openweathermap.org/api)

2. Create .env file in root directory:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
VITE_API_BASE_URL=weather_api_base_url
VITE_IMG_BASE_URL=weather_image_base_url
```

### 4. Start Development Server
```bash
npm run dev
```
Visit http://localhost:5173

---

## 📚 API Reference
This app uses [OpenWeather Current Weather Data API](https://openweathermap.org/current):

- Endpoint: /weather
- Rate Limit: 60 calls/minute (Free Tier)
- Data Included: Temperature, Humidity, Weather Conditions

---

## 📂 Folder Structure

```bash
src/  
├── components/  
│   ├── LocationSearch/          # Dedicated to location input logic  
│   │   ├── LocationSearch.tsx   # Form + input handling  
│   │   ├── LocationSearch.styles.ts  
│   │   └── index.ts             # Barrel file for exports  
│   ├── WeatherCard/             # Focused on displaying weather data  
│   │   ├── WeatherCard.tsx      # Primary card layout  
│   │   ├── WeatherCard.styles.ts  
│   │   └── index.ts  
│   ├── Icon/                    # Reusable icon component  
│   │   ├── Icon.tsx             # Dynamic icon rendering  
│   │   └── index.ts  
│   └── shared/  
│       ├── LoadingSpinner/      # Loading state  
│       └── ErrorDisplay/        # Error messaging  
├── services/  
│   └── weather.ts               # API calls + data types  
├── hooks/  
│   └── useWeatherQuery.ts       # Custom React Query hook  
├── App.tsx                      # Root component  
└── main.tsx                     # React Query setup
```

---

## 📄 License
Distributed under the MIT License. See LICENSE for more information.