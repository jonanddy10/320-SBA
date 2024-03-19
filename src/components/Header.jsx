import React from 'react'


function Header({viewData}) {
const weatherData = useContext(WeatherContext);

return (
    <>
    <div className='shift'>{shift}</div>
    <div className='header'>
        
        <div className='smallFont' id='low'>{viewData.low}</div>
        <div className='largeFont' id='now'>{viewData.now}</div>
        <div className='smallFont' id='high'>{viewData.high}</div>
    </div>
    </>
  )
}
export default Header