import React from 'react';

const AirQualityCard = ({aqi, city, domPollutant, time}) => {

  return (
    <div>
        <h5>{city.name}</h5>
        <h6>Air Quality Index: {aqi}</h6>
        <p>Dominant Pollutant: {domPollutant}</p>
        <p>Last Updated: {time.s}</p>
    </div>
  )
}

export default AirQualityCard;