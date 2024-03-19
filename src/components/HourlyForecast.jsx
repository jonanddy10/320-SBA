import React from 'react'

function HourlyForecast() {
  const weatherData = useContext(WeatherContext);

  if(!weatherData) return null;

  return (
    <div>
      ~Display HourlyForecast forecast~
    </div>
  )
}

export default HourlyForecast