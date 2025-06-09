import React, { useState } from "react";

const LightSwitch = () => {
  const [onOf, setOnOF] = useState(true);
  return (
    <div>
      <h1 className="text-5xl text-center">LightSwitch</h1>

      <div className="flex w-[500px]  m-auto justify-between items-center pt-9">
        <div>
          <button
          aria-label="Toggle light"
            className={`${
              onOf ? "" : "opacity-[0.4]"
            } px-7 py-2 rounded-2xl text-[#2b0f0f] text-2xl font-bold cursor-pointer
`}
            onClick={() => setOnOF(!onOf)}
          >
             💡
          </button>
        </div>

        <div>
            <p className="text-xl">The light is {onOf ? "ON": "OFF"}</p>
        </div>
      </div>
    </div>
  );
};

export default LightSwitch;
