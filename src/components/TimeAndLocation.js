import React from "react";
import { formatToLocalTime } from "../Services/WeatherServices";
import { format } from "date-fns";

const TimeAndLocation = ({ weather }) => {
  console.log(weather.dt);
  const date = new Date(weather.dt * 1000); // Convert the timestamp to milliseconds

    const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss a');
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {/* {formatToLocalTime(weather.dt, weather.timezone)} */}
        <span className="text-lime-400"> Current Date & Time:</span> {formattedDate}

        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium"><span className="text-lime-400">CITY :</span> {weather.name}, <span className="text-lime-400">COUNTRY :</span>  {weather.country}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
