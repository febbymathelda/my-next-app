import { useEffect, useState } from 'react';

export default function WeatherPage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  if (!weather) return <p>Loading...</p>;

  return (
    <div>
      <h1>Cuaca di {weather.name}</h1>
      <p>🌡 Suhu: {weather.main.temp}°C</p>
      <p>☁️ Cuaca: {weather.weather[0].description}</p>
    </div>
  );
}
