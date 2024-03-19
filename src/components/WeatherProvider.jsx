import React, { createContext, useContext, useEffect, useState } from 'react'

const WeatherContext = createContext();

export default function WeatherProvider({children}) {
  const[weatherData, setWeatherData] = useState(null)

  const test = '7eae607f20a56973cd3ed70361e85210'

  // allow user to input city:

  // create a let variable and save user-input inside of it. clear any white-space at front 
  // or end and replace any whitespace between the first letter and the last letter (no special characters) with '%20' (URL whitespace) 
  
  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=7eae607f20a56973cd3ed70361e85210&units=imperial'

  // retrieve ... and store data 
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      
      setWeatherData({...data})
    } catch (error) {
      console.log(`There's been an error connecting to the API` + error)
    }
  }
  fetchData();
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