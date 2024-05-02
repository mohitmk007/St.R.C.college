// import React from 'react'

import { useEffect, useRef } from "react";
import { useState } from "react";

const UseRef = () => {
  // const [valueCount, setValueCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  // console.log(count);

  useEffect(() => {
    // setValueCount((prev) => prev + 1);
    count.current = count.current + 1;
    // console.log(count);
  });
  const inputbtn = useRef()
  const clickedFun = () => {
    console.log(inputbtn.current);
    inputbtn.current.style.fontSize = "30px" 
  }
  return (
    <div>
      <input
        className="input-field"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Input value:{inputValue}</h1>
      <h1>This is counter:{count.current}</h1>
      <button ref={inputbtn} onClick={clickedFun}>click me</button>
    </div>
  );
};

export default UseRef;
