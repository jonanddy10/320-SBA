import React, { createContext, useContext, useEffect, useState } from 'react'

const WeatherContext = createContext();

export default function WeatherProvider({children}) {
  const[weatherData, setWeatherData] = useState(null)

  const URL = 'https://api.weather.gov/gridpoints/SEW/124,69/forecast'

  // retrieve ... and store data 
  useEffect(() => {
    const fetchData = async () => {
    try {
      const result = await fetch(URL)
      const json = await result.json()
      
      setWeatherData([...json.properties.periods])
      console.log(weatherData)
      
    } catch (error) {
      console.log(`There's been an error connecting to the API`)
    }
  fetchData();
  }
}, [])

// function getHeader() {
//   if(data !== null){

//   setWeatherData({
//     shift: data.name, 
//     low: data.temperature,
//     now: data.temperature,
//     high: data.temperature,
//     weekly: [],
//     hourly: [],
//   })
//   console.log(weatherData)
//   }
// }

  return (
    <WeatherContext.Provider value={weatherData}>
        {children}
    </WeatherContext.Provider >
  )
}

export {WeatherProvider, WeatherContext}