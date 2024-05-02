// import React from 'react'

import { useState } from "react";

const UseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const increment1 = () => {
    setCounter1(counter1 + 1);
  };

  const increment2 = () => {
    setCounter2(counter2 + 1);
  };

  //   const isEven= useMemo(() => {
  //     console.log("iseven")
  //     let i = 0;
  //     while (i <= 100000000) i++;
  //     return counter1 % 2 === 0;
  //   },[counter1]);
  const isEven = () => {
    console.log("iseven");
    return counter1 * 5;
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <button
        onClick={increment1}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Counter1 - {counter1}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button
        onClick={increment2}
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Counter2 - {counter2}
      </button>
    </div>
  );
};

export default UseMemo;
