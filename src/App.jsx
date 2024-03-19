import { useState, useEffect } from 'react'
import './App.css'
  // main components
  import Header from './components/Header'
  import Hourly from './components/Hourly'
  import Week from './components/Week'
  import Background from './components/Background'

function App() {
  const [data, setData] = useState(null)
  const [headerData, setHeaderData] = useState({})

  const URL = 'https://api.weather.gov/gridpoints/SEW/124,69/forecast'

  // retrieve ... and store data 
  useEffect(() => {
    const fetchData = async () => {
    try {
      const result = await fetch(URL)
      const json = await result.json()
      
      setData([...json.properties.periods])
      getHeader()
      
    } catch (error) {
      console.log(`There's been an error connecting to the API`)
    }
  fetchData();
  }
}, [])

  return (
    <>
      <Background />
      <Header data={headerData} />
      {/* <Caption /> */}
      <Hourly />
      <Week />
    </>
  )
}

export default App

function getHeader() {
  if(data !== null){

  setHeaderData({
    shift: data.name, 
    low: data.temperature,
    now: data.temperature,
    high: data.temperature
  })
  console.log(headerData)
  }
}