import React from 'react'

function Home() {

    return (
    <>
        <div><h1>Welcome,</h1></div>
        <div>Enter your city to continue</div>
        <br/>
        <form id='location-form' className='form'>
            <input type='text' placeholder='Seattle, WA'/>
            <button id='search-button'>search</button>
        </form>
    </>
  )
}

export default Home