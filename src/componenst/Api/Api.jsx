import axios from "axios";
import { useState } from "react";

const Api = () => {
  const [datas, setDatas] = useState([]);
  const GetData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      const data = response.data.users;
      setDatas(data);
      console.log(datas);
    } catch (error) {
      console.error("error accure in fatching data");
    }
  };

  return (
    <div className="bg-gray-200 m-5 p-5">
      <button onClick={GetData} className="text-xl bg-green-500 text-white rounded px-5 py-3 ">Get Data</button>
      <h1>Fetched data</h1>
      {datas.map((value, i) => {
        return (
          <div key={i} className="containerDiv inline-block items-center justify-center">
            <div className="p-10 bottom-1">
              <img
                src={value.image}
                height={100}
                width={100}
                alt={`img${i + 1}`}
              />
              <p>{value.firstName}</p>
              <p>{value.age}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
