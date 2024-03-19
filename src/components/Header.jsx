import React from 'react'


function Header({shift, low, now, high}) {
const weatherData = useContext(WeatherContext);

return (
    <>
    <div className='shift'>{shift}</div>
    <div className='header'>
        
        <div className='smallFont' id='low'>{low}</div>
        <div className='largeFont' id='now'>{now}</div>
        <div className='smallFont' id='high'>{high}</div>
    </div>
    </>
  )
}
export default Header