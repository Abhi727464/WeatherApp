import { useEffect, useState } from "react";
import "./App.css";
import getFormattedWeatherData from "./Services/WeatherServices";
import Forecast from "./components/Forecast";
import Input from "./components/Input";
import TempratureAndDetails from "./components/TempratureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";


function App() {
  const [query, setQuery] = useState({ q: "Bengaluru" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try{
        await getFormattedWeatherData({...query,units}).then((data) => {
          setWeather(data);
        });
      }catch(err){
       alert("please enter valid city")
      }
   
    };
    fetchWeather();
  }, [query, units]);



  return (
    <>
    <div className="mx-auto max-w-screen-md  mt-2 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ">
      <h1 className="mb-4 py-5 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Weather App</h1>

      <Input setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempratureAndDetails weather={weather} units={units}/>
          {/* <Forecast title="Hourly Forecast" /> */}
          <Forecast title="Daily Forecast" />
          
        </>
      )}
    
    </div>

      </>
  );
}

export default App;
