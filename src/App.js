import "./app.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./component/AllCountries/AllCountries";
import CountryInfo from "./component/CountryInfo/CountryInfo";
import { useState } from "react";

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  
  return (
    <>
      <div className={`app ${darkModeOn ? "dark" : ""}`}>
        <header className="header">
          <div className="container__header">
            <h5>Where in the world</h5>
            <p className="toggle" onClick={() => setDarkModeOn(!darkModeOn)}>
              Toggle
            </p>
          </div>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<AllCountries />} />
            <Route path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
