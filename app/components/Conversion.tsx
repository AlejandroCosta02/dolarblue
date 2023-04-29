"use client";
import { useState } from "react";
import { FaEquals, FaArrowsAltV } from "react-icons/fa";
import { US, AR } from "country-flag-icons/react/3x2";

function Conversion({ dolarblue }: { dolarblue: number }) {
  const [result, setResult] = useState(0);
  const [result1, setResult1] = useState(0);
  const [effect, setEffect] = useState(false);
  const [effect1, setEffect1] = useState(false);
  const [changeLayout, setChangeLeyout] = useState(true);
  const [number, setNumber] = useState("");
  const [number1, setNumber1] = useState("");

  const pesoToDolar = () => {
    setEffect(true);
    let x = number;
    console.log(x);
    let result = (x / dolarblue).toFixed(2);
    // result = result.toFixed(2);
    result = result
      .toLocaleString("en-US", { useGrouping: true })
      .replace(/,/g, " ");
    setResult(result);
  };

  const arrowButton = () => {
    setChangeLeyout(!changeLayout);
    setEffect1(!effect1);
    setEffect1(!effect);
    setNumber("");
    setNumber1("");
    setResult(0);
  };
  const dolarToPeso = () => {
    setEffect(true);
    setEffect1(true);
    let x = number1;
    let result1 = (x * dolarblue).toFixed(2);
    // result = result.toFixed(2);
    result1 = result1
      .toLocaleString("en-US", { useGrouping: true })
      .replace(/,/g, " ");
    setResult1(result1);
  };

  return (
    <>
      {changeLayout ? (
        <>
          <main className="flex flex-col items-center justify-center w-3/4 h-full m-auto pb-10">
            <div className="relative">
              <input
                type="number"
                className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="0"
                // value={userInput}
                // onChange={(e) => setUserInput(e.target.value)}
                onChange={(e) => setNumber(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                <span className="text-gray-500 text-3xl">$</span>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
                <span className="text-gray-500 text-3xl">ARS</span>
                <AR title="United States" className="pl-2 w-10 h-10" />
              </div>
            </div>
            {/* buttons */}
            <div className=" flex flex-row space-x-10 mt-5">
              <button
                onClick={arrowButton}
                className={`${
                  effect1 && "animate-wiggle"
                } bg-black p-5 text-white rounded hover:bg-red-500 hover:text-black`}
              >
                <FaArrowsAltV />
              </button>
              <button
                className={`${
                  effect && "animate-wiggle"
                } bg-black p-5 text-white rounded hover:bg-green-500 hover:text-black`}
                onClick={pesoToDolar}
                onAnimationEnd={() => setEffect(false)}
              >
                <FaEquals />
              </button>
            </div>
            {/* result */}
            <div className="relative mt-5">
              <input
                type="text"
                name="hs-input-with-leading-and-trailing-icon"
                className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="0"
                value={result}
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
        </>
      ) : (
        <main className="flex flex-col items-center justify-center w-3/4 h-full m-auto pb-10">
          <div className="relative">
            <input
              type="number"
              name="hs-input-with-leading-and-trailing-icon"
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0"
              // value={userInput1}
              // onChange={(e) => setUserInput(e.target.value)}
              onChange={(e) => {
                setNumber1(e.target.value);
              }}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
              <span className="text-gray-500 text-3xl">$</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
              <span className="text-gray-500 text-3xl">USD</span>
              <US title="United States" className="pl-2 w-10 h-10" />
            </div>
          </div>
          {/* buttons */}
          <div className=" flex flex-row space-x-10 mt-5">
            <button
              onClick={arrowButton}
              className={`${
                effect1 && "animate-wiggle"
              } bg-black p-5 text-white rounded hover:bg-red-500 hover:text-black`}
            >
              <FaArrowsAltV />
            </button>
            <button
              className={`${
                effect && "animate-wiggle"
              } bg-black p-5 text-white rounded hover:bg-green-500 hover:text-black`}
              onClick={dolarToPeso}
              onAnimationEnd={() => setEffect(false)}
            >
              <FaEquals />
            </button>
          </div>
          {/* result */}
          <div className="relative mt-5">
            <input
              type="text"
              name="hs-input-with-leading-and-trailing-icon"
              className="w-3/4 py-3 px-4 pl-9 shadow-sm rounded-sm text-3xl font-bold border-b-4 outline-0 border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0"
              value={result1}
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
export default Conversion;
