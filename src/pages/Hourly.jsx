import React, { useContext, useEffect } from 'react'
import {WeatherContext} from '../components/WeatherProvider'

function Hourly() {
const weatherData = useContext(WeatherContext);

useEffect(() => {
    console.log(weatherData);
}, [weatherData])
  return (
    <div>
        Hourly
    </div>
  )
}

export default Hourly