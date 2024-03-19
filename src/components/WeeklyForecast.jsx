import React from 'react'

function WeeklyForecast() {
  const weatherData = useContext(WeatherContext)
  
  if(!weatherData) return null;

  return (
    <div>
      ~Display WeeklyForecast forecast~
    </div>
  )
}

export default WeeklyForecast