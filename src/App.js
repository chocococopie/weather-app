
import { useState } from "react";
import "./App.css";

const api = {
  key: "1c1505beada7777e2b9467ef7ab532e7",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      {/* HEADER */}
      <h1>Weather App</h1>

      {/* SEARCH BOX */}
      <div>
        <input
          type="text"
          placeholder="Enter city..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>

      {typeof weather.main != "undefined" ? (
        <div>
          {/* LOCATION */}

          <p>{weather.name}</p>

          {/* TEPMPERATURE F/C */}

          <p>{weather.main.temp} C</p>

          {/* CONDITION (SUNNY) */}
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
