"use client";
import React, { useState } from "react";

const page = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrease = (counter) => {
    if (counter === 10) return alert("Cannot go above 10");
    setCounter((prev) => prev +  1);
  };
  const handleDecrease = () => {

       if (counter === 0) return alert("Cannot go below 0");
setCounter((prev) => prev - 1);
  };
  return (
    <div className="max-w-[800px] w-full m-auto container p-8">
      <h3
        className="text-4xl
"
      >
        Counter
      </h3>
      <div className="flex justify-between items-center w-[200px] mt-6">
        <button
          className="text-red-800 font-bold text-6xl cursor-pointer"
          onClick={() => handleIncrease(counter)}
          disabled={counter == 10}
        >
          +
        </button>
        <p>{counter}</p>
        <button
          disabled={counter == 0}

          onClick={() => handleDecrease(counter)}
          className="text-blue-800 font-bold text-6xl cursor-pointer"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default page;
