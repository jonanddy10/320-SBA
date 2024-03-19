import React from 'react'

function Home() {
  return (
    <>
        <div>Enter your city to continue</div>
        <br/>
        <form class='form'>
            <input type='text' placeholder='Seattle, WA'/>
            <button id='search-button'>search</button>
        </form>
    </>
  )
}

export default Home