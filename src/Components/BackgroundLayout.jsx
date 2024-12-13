// import React, { useEffect, useState } from 'react';
// import { useStateContext } from '../Context';
// // images
// import Clear from '../assets/images/Clear.jpg';
// import Fog from '../assets/images/fog.png';
// import Cloudy from '../assets/images/Cloudy.jpg';
// import Rainy from '../assets/images/Rainy.jpg';
// import Snow from '../assets/images/snow.jpg';
// import Stormy from '../assets/images/Stormy.jpg';

// // Mapping weather conditions to corresponding images
// const weatherImages = {
//   clear: Clear,
//   cloud: Cloudy,
//   rain: Rainy,
//   shower: Rainy,
//   snow: Snow,
//   fog: Fog,
//   thunder: Stormy,
//   storm: Stormy,
// };

// const BackgroundLayout = () => {
//   const { weather } = useStateContext();
//   const [image, setImage] = useState(Clear);

//   useEffect(() => {
//     if (weather.conditions) {
//       const condition = Object.keys(weatherImages).find(key =>
//         weather.conditions.toLowerCase().includes(key)
//       );
//       setImage(weatherImages[condition] || Clear);
//     }
//   }, [weather]);

//   return (
//     <img src={image} alt="weather_image" className="h-screen w-full fixed left-0 top-0 -z-[10]" />
//   );
// };

// export default BackgroundLayout;