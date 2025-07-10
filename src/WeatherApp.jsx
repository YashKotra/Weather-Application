import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './WeatherApp.css';
import { useState } from 'react';

export default function App() {
  const [weatherInfo,setWeatherInfo]=useState({
    city:"Chandigarh",
    temp: 26.78,
    feelsLike: 28.94,
    tempMin: 26.78,
    tempMax: 26.78,
    humidity: 76,
    weather: "overcast clouds"
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  };

  return (
    <div className="App">
      <div className="AppHeader">
        <AcUnitIcon fontSize="large" />
        <h1>Weather App by Yash Kotra</h1>
      </div>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox Info={weatherInfo}/>
    </div>
  );
}
