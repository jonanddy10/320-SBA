// This react application will provide the current temperature in Seattle (F). 
// When clicking on the 'Hourly' or 'Weekly' option a 'new screen' will display the associated data. 

// import { useState, useEffect, createContext, useContext } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import './App.css'

  // pages
  import Home from './pages/Home'
  import Hourly from './pages/Hourly';
  import Weekly from './pages/Weekly';

  import WeatherProvider from './components/WeatherProvider';

// const WeatherContext = createContext();

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <h1>Welcome,</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="Hourly">Hourly</NavLink>
          </nav>
        </header>
      <main>
      {/* <WeatherProvider> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hourly" element={<Hourly/>} />
          <Route path="/weekly" element={<Weekly />} />
        </Routes>
      {/* </WeatherProvider> */}
      </main>
      </BrowserRouter>
    </>
  )
}

export default App