/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';
import '../index.css';

// Mapping weather conditions to their respective icons
const iconMap = {
  cloud,
  rain,
  clear: sun,
  thunder: storm,
  fog,
  snow,
  wind,
};

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  visibility,
  iconString,
  conditions,
  degrees,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      const lowerCaseIconString = iconString.toLowerCase();
      const matchedIcon = Object.keys(iconMap).find(key =>
        lowerCaseIconString.includes(key)
      );
      setIcon(iconMap[matchedIcon] || sun);
    }
  }, [iconString]);

  const formattedTemperature = degrees === 'F' ? ((temperature * 9/5) + 32).toFixed(1) : temperature;

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center'>
          {formattedTemperature} &deg;{degrees}
        </p>
      </div>
      <div className='font-bold text-center text-xl'>{place}</div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <InfoCard title="Wind Speed" value={`${windspeed} km/h`} bgColor="bg-blue-600" />
        <InfoCard title="Humidity" value={`${humidity} gm/m³`} bgColor="bg-green-600" />
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Visibility</p>
        <p className='text-lg'>{visibility || 'N/A'}</p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
  );
};

const InfoCard = ({ title, value, bgColor }) => (
  <div className={`flex-1 text-center p-2 font-bold shadow rounded-lg ${bgColor}`}>
    {title}
    <p className='font-normal'>{value}</p>
  </div>
);

export default WeatherCard;
