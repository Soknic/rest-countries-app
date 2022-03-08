import "./app.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./component/AllCountries/AllCountries";
import CountryInfo from "./component/CountryInfo/CountryInfo";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries/>} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
