const API_KEY = "5896951c50004dbc606c3f041ee09ebb";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json()).then((data)=>{
    if(data){
      return data;
    }else{
      alert('wromg city name')
    }
  }).catch((err) => console.log(err));
};


const formatCurrentWeather = (data) => {
  console.log("Current Weather Data:", data);
  if(data){
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      wind: { speed },
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
    } = data;
  
    const { main: details, icon } = weather[0];
  
    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      speed,
      country,
      sunrise,
      sunset,
      details,
      icon,
      name,
      dt,
    };
  }
 
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  return { ...formattedCurrentWeather};
};

const iconUrlsFromCode = (code)=>`http://openweathermap.org/img/w/${code}.png`
export default getFormattedWeatherData;
export {iconUrlsFromCode}
