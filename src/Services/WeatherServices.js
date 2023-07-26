import { DateTime } from "luxon";
// const API_KEY = "1d5e877ab6608967ab91786c40b53308";
const API_KEY = "5896951c50004dbc606c3f041ee09ebb";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/3.0/onecall?lat=28.6667&lon=77.2167&exclude=current,hourly&appid=5896951c50004dbc606c3f041ee09ebb




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
const formatForecastWeather = (data) => {
  console.log("Forecast Weather Data:", data);
  let { timezone, daily, hourly } = data;
  daily = Array.isArray(daily) ? daily.slice(1, 6) : []; // Check if daily is an array, if not, set it to an empty array
  daily = daily.map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  return { timezone, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  const { lat, lon } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};
// const formatToLocalTime = (
//   secs,
//   zone,
//   format = "ccc,dd LLL yyy' | Local time: 'hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatToLocalTime = (
  secs,
  zone,
  format = "ccc, dd LLL yyy' | Local time: 'hh:mm a"
) => DateTime.fromMillis(secs * 1000).setZone(zone).toFormat(format);

const iconUrlsFromCode = (code)=>`http://openweathermap.org/img/w/${code}.png`
export default getFormattedWeatherData;
export {formatToLocalTime,iconUrlsFromCode}
