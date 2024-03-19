// This react application will provide the current Weathererature in Seattle (F). 
// When clicking on the 'Weather' or 'Weekly' option a 'new screen' will display the associated data. 

// import { useState, useEffect, createContext, useContext } from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import './App.css'

  // pages
  import Search from './pages/Search'
  import Weather from './pages/Weather';

  import WeatherProvider from './components/WeatherProvider';

// const WeatherContext = createContext();

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to="/">Find</NavLink>
            <NavLink to="/Weather">Weather</NavLink>
          </nav>
        </header>

        <main>
        <WeatherProvider>
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/Weather" element={<Weather/>} />
        </Routes>
        </WeatherProvider>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App