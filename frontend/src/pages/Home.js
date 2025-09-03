import React, { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard";
import "../css/Home.css";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:1308/api/weather");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const weatherData = Array.isArray(data) ? data : [data];
        setWeather(weatherData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>🌤 Weather App</h1>
      </header>

      {/* Weather Cards */}
      <main className="weather-grid">
        {weather.map((item) => (
          <WeatherCard
            key={item.id}
            name={item.name}
            description={item.description}
            temp={item.temp}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="home-footer">
        &copy; {new Date().getFullYear()} Weather App. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
