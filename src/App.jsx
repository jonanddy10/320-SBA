import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
  // main components
  import Header from './components/Header'
  import HourlyForecast from './components/HourlyForecast'
  import WeeklyForecast from './components/WeeklyForecast'

const WeatherContext = createContext();

function App() {

  return (
    <>
    <Router>
      <WeatherProvider>
      <Header viewData={headerData} />
      <Routes>
        <Route path="/hourly" element={<HourlyForecast/>}/>
        <Route path="/weekly" element={<WeeklyForecast />} />
      </Routes>
      </WeatherProvider>
    </Router>
    </>
  )
}

export default App