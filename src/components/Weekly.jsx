import React from 'react'

function Weekly() {
  const weatherData = useContext(WeatherContext)
  
  if(!weatherData) return null;

  return (
    <div>
      ~Display Weekly forecast~
    </div>
  )
}

export default Weekly