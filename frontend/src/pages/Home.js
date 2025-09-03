import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import WeatherCard from "../components/weatherCard";
import "../css/Home.css";
import AuthButton from "../components/Auth"; 

const Home = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0(); 
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!isAuthenticated) return;
      try {
        const token = await getAccessTokenSilently(); 
        const response = await fetch("http://localhost:1308/api/weather", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
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
  }, [isAuthenticated, getAccessTokenSilently]); 

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="auth-prompt">
        <header className="home-header">
          <h1>🌤 Weather App</h1>
        </header>
        <main className="auth-content">
          <AuthButton />
        </main>
        <footer className="home-footer">
          &copy; {new Date().getFullYear()} Weather App. All rights reserved.
        </footer>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="home-container">
  
      <header className="home-header">
        <h1>🌤 Weather App</h1>
        <AuthButton />
      </header>

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

      <footer className="home-footer">
        @ Weather App (Fidenz)
      </footer>
    </div>
  );
};

export default Home;