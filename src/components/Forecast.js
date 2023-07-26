import React from "react";

const Forecast = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">Sunday</p>
          <img
            src="https://www.nicepng.com/png/full/1-14699_transparent-cartoon-sun-png-clipart-picture-sunshine-clip.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">22°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">Monday </p>
          <img
            src="https://www.nicepng.com/png/full/1-14699_transparent-cartoon-sun-png-clipart-picture-sunshine-clip.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">24°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">Tuesday </p>
          <img
            src="https://www.nicepng.com/png/full/1-14699_transparent-cartoon-sun-png-clipart-picture-sunshine-clip.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">26°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">Wednesday </p>
          <img
            src="https://www.nicepng.com/png/full/1-14699_transparent-cartoon-sun-png-clipart-picture-sunshine-clip.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">52°</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">Thursday </p>
          <img
            src="https://www.nicepng.com/png/full/1-14699_transparent-cartoon-sun-png-clipart-picture-sunshine-clip.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-medium">42°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
