import React from "react";
import {
  UilSearchAlt,
  UilMapPin,
  UilAlignCenterH,
} from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className=" flex flex-row justify-center my-6">
      <div className=" flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search.."
          className="text-sm font-light p-2 w-full shadown-xl focus:outline-none capitalize rounded-md"
        ></input>
        <UilSearchAlt
          size={20}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilMapPin
          size={20}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-md text-white font-light">
          °C
        </button>
        <p className="text-white text-sm mx-1 mr-0.55"> or </p>
        <button name="imperial" className="text-md text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
