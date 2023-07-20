import './App.css';
import { useState } from 'react';
import CitySearch from './CitySearch';
import AirQualityCard from './AirQualityCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);

  const getAirQuality = async (city) => {
    try {
      const resp = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`);
      console.log(resp);
      const airQualityInfo = await resp.json();
      console.log(airQualityInfo.data);
      if (resp.ok && airQualityInfo.status === 'ok') {
        setAirQualityData(airQualityInfo.data);
        setError(null);
      } else {
        setError("Sorry, we couldn't find the city you were looking for. Try another location nearby or ensure your spelling is correct.");
        setAirQualityData(null);
      }
    } catch(err) {
      console.log(`Error: ${err}`);
      setError('Sorry, something went wrong.');
      setAirQualityData(null);
    }
  }

  return (
    <div>
    <h1>Air Quality Index Checker</h1>
    <CitySearch getAirQuality={getAirQuality}/>
    {error && (
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    )}
    {airQualityData && (
      // pollutant info
      <>
      <AirQualityCard city={airQualityData.city} aqi={airQualityData.aqi} domPollutant={airQualityData.dominentpol} time={airQualityData.time} />
      </>
    )}
    </div>
  );
}

export default App;
