import React from 'react'

function Hourly() {
  const weatherData = useContext(WeatherContext);

  if(!weatherData) return null;

  return (
    <div>
      ~Display Hourly forecast~
    </div>
  )
}

export default Hourly