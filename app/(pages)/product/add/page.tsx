"use client";

import React, { useState, useRef } from "react";

const Page = () => {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  console.log("Component Rendered!");

  const increaseState = () => {
    setStateCount(stateCount + 1); // Re-renders component
  };

  const increaseRef = () => {
    refCount.current += 1; // DOES NOT re-render UI
    console.log("Ref Count: ", refCount.current);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="font-bold text-xl">useState vs useRef 🔥</h1>

      {/* useState Value (updates UI) */}
      <p className="text-lg">
        State Count: <strong>{stateCount}</strong>
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={increaseState}
      >
        Increase useState
      </button>

      {/* useRef Value (does NOT update UI automatically) */}
      <p className="text-lg">
        Ref Count: <strong>{refCount.current}</strong> (UI won't update)
      </p>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={increaseRef}
      >
        Increase useRef
      </button>

      <p className="text-sm text-gray-600 mt-4">
        👆 Notice: Clicking <b>useRef button</b> updates value in console but NOT on screen.
      </p>
    </div>
  );
};

export default Page;
