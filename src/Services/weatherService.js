import axios from 'axios';

const getWeatherData = async (place) => {
  const options = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    params: {
        aggregateHours: '24',
        location: place,
        contentType: 'json',
        unitGroup: 'metric',
        shortColumnNames: 0,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  return response;
};

export { getWeatherData };