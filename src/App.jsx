import { useState, useEffect, createContext, useContext } from 'react'
import './App.css'
  // main components
  import Header from './components/Header'
  import Hourly from './components/Hourly'
  import Weekly from './components/Weekly'

const WeatherContext = createContext();

function App() {

  return (
    <>
      <WeatherProvider>
      <Header viewData={headerData} />
      {/* <Caption /> */}
      <Hourly />
      <Weekly />
      </WeatherProvider>
    </>
  )
}

export default App

function getHeader() {
  if(data !== null){

  setWeatherData({
    shift: data.name, 
    low: data.temperature,
    now: data.temperature,
    high: data.temperature,
    weekly: [],
    hourly: [],
  })
  console.log(weatherData)
  }
}