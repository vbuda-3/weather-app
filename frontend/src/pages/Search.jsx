import "../styles/Search.css";
import { useState } from "react";
import fetchWeather from "../services/api";

function Search() {
  // state hooks
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page from refreshing
    if (!location || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const data = await fetchWeather(location, startDate, endDate);
      setForecastData(data); // set the forecast data to state
      setError(null); // clear any previous errors
      console.log(data);
    } catch (error) {
      console.error("Search: Error fetching weather", error);
    }
  };

  const getTempColor = (temp) => {
    if (temp < 32) return "cold"; // Blue
    if (temp >= 32 && temp < 60) return "mild"; // Green
    if (temp >= 60 && temp < 80) return "warm"; // Yellow
    if (temp >= 80 && temp < 100) return "hot"; // Red
    if (temp >= 100) return "extreme"; // Pink
  };

  return (
    <div className="search-container">
      <h1 className="search-title">Check your Vacation Weather</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-group">
          <label htmlFor="location" className="search-label">
            Location:
          </label>
          <input
            className="search-input"
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="search-date-row">
          <div className="search-input-group">
            <label htmlFor="start-date" className="search-label">
              Start Date:
            </label>
            <input
              className="search-input"
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="search-input-group">
            <label htmlFor="end-date" className="search-label">
              End Date:
            </label>
            <input
              className="search-input"
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="search-input-group">
            <div className="search-button-container">
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      {forecastData && (
        <div className="forecast-container">
          <h2 className="results-header">
            Weather for {forecastData.location}
          </h2>
          <div className="forecast-results">
            {forecastData.forecast.map((day, index) => (
              <div className="forecast-card" key={index}>
                <h3>{day.date}</h3>
                <p>
                  <strong>Conditions:</strong> {day.conditions}
                </p>
                <p>
                  <strong>High:</strong>{" "}
                  <span className={getTempColor(day.high)}>{day.high}°F</span>
                </p>
                <p>
                  <strong>Low:</strong>{" "}
                  <span className={getTempColor(day.low)}>{day.low}°F</span>
                </p>
                <p>
                  <strong>Feels Like:</strong>{" "}
                  <span className={getTempColor(day.feelslike)}>
                    {day.feelslike}°F
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
