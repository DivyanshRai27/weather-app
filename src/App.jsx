import { useState } from 'react';
import './App.css';
import search from './assets/icons/search.svg';
import { useStateContext } from './Context';
import { WeatherCard, MiniCard } from './Components';

function App() {
  // State to manage the input value for the search field
  const [input, setInput] = useState('');

  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  console.log(weather);

  // Function to update the place state with the input value and clear the input field
  const submitCity = () => {
    setPlace(input);
    setInput('');
  };

  // Event handler for the Enter key press in the input field
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      submitCity();
    }
  };

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input
            onKeyUp={handleKeyUp}
            type="text"
            placeholder='Search city'
            className='focus:outline-none w-full text-[#212121] text-lg'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {values?.slice(1, 7).map((curr) => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;