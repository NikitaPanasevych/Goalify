import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
//components
import Timer from './components/Timer'
import { Drawer } from '@mui/material'
import { Button } from '@mui/material'
//data
import quoteData from "../public/quoteData"
import Head from 'next/head'
import { Icon } from '@mui/material'

const Home: NextPage = () => {

  const [dailyQuote, setDailyQuote] = useState("");
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(0)



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
      <div className='Background '>
        <h1 className=" text-6xl text-center pt-4 text-white">
          Chrono
        </h1>
        <Timer
          quote={dailyQuote}
        />
        <Button className=' absolute top-4 left-4 text-xl' onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          Hui
        </Drawer>
      </div>
    </div>
  )
}

export default Home
