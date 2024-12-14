/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const iconMap = {
  cloud,
  rain,
  clear: sun,
  thunder: storm,
  fog,
  snow,
  wind,
}

const MiniCard = ({ time, temp, iconString, degrees }) => {
  const [icon, setIcon] = useState()

  useEffect(() => {
    if (iconString) {
      const lowerCaseIconString = iconString.toLowerCase()
      const matchedIcon = Object.keys(iconMap).find(key => lowerCaseIconString.includes(key))
      setIcon(iconMap[matchedIcon])
    }
  }, [iconString])

  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center'>
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'>{degrees === 'F' ? (temp * 9/5) + 32 : temp} &deg;{degrees}</p>
    </div>
  )
}

export default MiniCard
