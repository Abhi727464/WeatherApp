import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { FaSun } from "react-icons/fa";
import {
  formatToLocalTime,
  iconUrlsFromCode,
} from "../Services/WeatherServices";
import { format } from "date-fns";

const TempratureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units
}) => {
  const findLocalTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert the timestamp to milliseconds

    const formattedDate = format(date, "HH:mm a");
    return formattedDate;
  };

  console.log(findLocalTime(sunset));
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p><span className="text-lime-400">Weather</span> : {details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlsFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{temp.toFixed()}° {units==="metric"? "C":"F"}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm item-center justify-center">
            <FaTemperatureHigh size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
          </div>

          <div className="flex font-light text-sm item-center justify-center">
            <WiHumidity size={25} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity.toFixed()}%</span>
          </div>

          <div className="flex font-light text-sm item-center justify-center">
            <MdSpeed size={22} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{speed.toFixed()}km/hr</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row item-center justify-center space-x-2 text-white text-sm py-3">
        <FaSun size={18} />
        <p className="font-light">
          Rise :{" "}
          <span className="font-medium ml-">{findLocalTime(sunrise)}</span>
        </p>
        <p className="font-light">|</p>

        <FaSun size={18} />
        <p className="font-light">
          Set : <span className="font-medium ml-">{findLocalTime(sunset)}</span>
        </p>
        <p className="font-light">|</p>

        <FaSun size={18} />
        <p className="font-light">
          High : <span className="font-medium ml-">{temp_max.toFixed()}°</span>
        </p>
        <p className="font-light">|</p>

        <FaSun size={18} />
        <p className="font-light">
          Low : <span className="font-medium ml-">{temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  );
};

export default TempratureAndDetails;
