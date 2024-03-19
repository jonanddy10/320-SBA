// This react application will provide the current temperature in Seattle (F). 
// When clicking on the 'Temp' or 'Weekly' option a 'new screen' will display the associated data. 

// import { useState, useEffect, createContext, useContext } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import './App.css'

  // pages
  import Search from './pages/Search'
  import Temp from './pages/Temp';

  import WeatherProvider from './components/WeatherProvider';

// const WeatherContext = createContext();

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/">Find</NavLink>
            <NavLink to="/Temp">Weather</NavLink>
          </nav>
        </header>

        <main>
        <WeatherProvider>
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/temp" element={<Temp/>} />
        </Routes>
        </WeatherProvider>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App