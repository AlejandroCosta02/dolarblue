"use client";
import { useState } from "react";
import { FaArrowsAltV } from "react-icons/fa";
import { US, AR } from "country-flag-icons/react/3x2";

function Conversion_2({ dolarblue }: { dolarblue: number }) {
  const [value, setValue] = useState<number>();
  const [result, setResult] = useState<number>(0);

  const [effectButton, setEffectButton] = useState(false);
  const [changeLayout, setChangeLeyout] = useState(true);

  const handleValueChange_1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    setResult(newValue / dolarblue);
  };
  const handleValueChange_2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    setResult(newValue * dolarblue);
  };
  const arrowButton = () => {
    setChangeLeyout(!changeLayout);
    setEffectButton(!effectButton);
    setValue(0);
    setResult(0);
  };
  return (
    <>
      {changeLayout ? (
        <main className="flex flex-col items-center justify-center w-3/4 h-full m-auto pb-10">
          {/* USER INPUT */}
          <div className="relative">
            <input
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              id="value-input"
              placeholder="0.00"
              value={value}
              onChange={handleValueChange_1}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
              <span className="text-gray-500 text-3xl">ARS</span>
              <AR title="United States" className="pl-2 w-10 h-10" />
            </div>
          </div>
          {/* EXCHANGE BUTTON */}
          <div className=" flex flex-row space-x-10 mt-5">
            <button
              onClick={arrowButton}
              className={`${
                effectButton && "animate-wiggle"
              } bg-black p-5  text-white rounded-full hover:bg-red-500 hover:text-black`}
            >
              <FaArrowsAltV />
            </button>
          </div>
          {/* RESULT */}
          <div className="relative mt-5">
            <input
              type="text"
              name="hs-input-with-leading-and-trailing-icon"
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder=""
              value={result ? result.toFixed(2) : "0.00"}
              readOnly
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
              <span className="text-gray-500 text-3xl">USD</span>
              <US title="United States" className="pl-2 w-10 h-10" />
            </div>
          </div>
        </main>
      ) : (
        <main className="flex flex-col items-center justify-center w-3/4 h-full m-auto pb-10">
          {/* USER INPUT */}
          <div className="relative">
            <input
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              id="value-input"
              placeholder="0.00"
              value={value}
              onChange={handleValueChange_2}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
              <span className="text-gray-500 text-3xl">USD</span>
              <US title="United States" className="pl-2 w-10 h-10" />
            </div>
          </div>
          {/* EXCHANGE BUTTON */}
          <div className=" flex flex-row space-x-10 mt-5">
            <button
              onClick={arrowButton}
              className={`${
                effectButton && "animate-wiggle"
              } bg-black p-5  text-white rounded-full hover:bg-red-500 hover:text-black`}
            >
              <FaArrowsAltV />
            </button>
          </div>
          {/* RESULT */}
          <div className="relative mt-5">
            <input
              type="text"
              name="hs-input-with-leading-and-trailing-icon"
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder=""
              value={result ? result.toFixed(2) : "0.00"}
              readOnly
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
              <span className="text-gray-500 text-3xl">ARS</span>
              <AR title="United States" className="pl-2 w-10 h-10" />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Conversion_2;
