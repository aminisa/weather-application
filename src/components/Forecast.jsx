import React from "react";

function Forecast({title}) {
  return (
    <div>
      <div className="flex  items-center justify-start mt-4">
        <p className="text-white text-md font-medium uppercase">
          {title}
        </p>
      </div>
      <hr className="my-1" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="text-white font-light text-sm mt-2">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-light text-sm">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white font-light text-sm mt-2">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-light text-sm">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white font-light text-sm mt-2">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-light text-sm">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white font-light text-sm mt-2">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-light text-sm">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white font-light text-sm mt-2">4:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 my-1"
          />
          <p className="font-light text-sm">22°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
