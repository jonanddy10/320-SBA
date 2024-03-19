import React, {useContext} from 'react'
import {WeatherContext} from '../components/WeatherProvider'

function TopCard() {
const weatherData = useContext(WeatherContext);

return (
    <div className='header-card'>
        <h2>{weatherData && weatherData.name}</h2>
        <h1>{weatherData && weatherData.main && weatherData.main.temp} F</h1>
        {weatherData && weatherData.weather && weatherData.weather.map((item, index) => (
      <div key={index}>
        <br/>
        <p>{item.description}</p>
      </div>
    ))}
    </div>
    
  )
}

export default TopCard