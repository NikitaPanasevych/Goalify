import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
//components
import Timer from './components/Stopwatch/Stopwatch'
import Topbar from './components/Stopwatch/Topbar'
//other
import quoteData from "../public/quoteData"


const Home: NextPage = () => {

  const [dailyQuote, setDailyQuote] = useState("");

  useEffect(() => {
    let rndInt = Math.floor(Math.random()*51)
    return(
      setDailyQuote(quoteData[rndInt].q)
    )
  },[])

  return (
    <div>
      <head>
        <title>Chrono</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');
        </style>
      </head>
      <div className='Background grid'>
        <Topbar />
        <Timer
          quote={dailyQuote}
        />
      </div>
    </div>
  )
}

export default Home
