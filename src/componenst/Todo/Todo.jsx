// import React from 'react'

import { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  // console.log(value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    // console.log(desc);
    setDesc("");
    setValue("");
    setMainTask([...mainTask, { value, desc }]);
    // console.log(mainTask);
  };
 

  let dataRender = <h1 className="">hello</h1>;
  if (mainTask.length > 0) {
    dataRender = mainTask.map((data, i) => {
      const deleteValue = () => {
        setMainTask(...mainTask.splice(i, 1));
      };
      return (
        <div
          key={i}
          className="flex items-center justify-between p-5 bg-cyan-600 text-white text-xl my-5"
        >
          <h2>{data.value}</h2>
          <h2>{data.desc}</h2>
          <button
            className="text-white text-base bg-red-500 px-4 py-2 rounded-lg "
            onClick={deleteValue}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <div>
      <form
        className="flex items-center max-w-lg mx-auto my-10"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <div className=" gap-5 flex items-center ps-3">
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your todo"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Description"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          // onClick={handleSubmit}
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          Add
        </button>
      </form>

      <hr />
      <hr />
      {dataRender}
    </div>
  );
};

export default Todo;
