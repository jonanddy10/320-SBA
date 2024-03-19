import React from 'react'

function WeatherProvider() {
    const[weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        fetchWeatherData().then(data => setWeatherData(data));
    }, []);

  return (
    <WeatherContext.Provider value={weatherData}>
        <h2>WeatherProvider, children here:</h2>
    </WeatherContext.Provider >
  )
}

export default WeatherProvider