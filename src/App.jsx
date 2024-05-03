import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        if (typeof res.data === "object" && res.data !== null) {
          setMyData([res.data]);
        } else {
          console.error(
            "Received data is not in the expected format:",
            res.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-purple-300  fixed inset-0">
      <div className="mt-32">
        <h1 className="text-3xl font-bold text-center mt-8">JOKE</h1>
        {myData.map((post, index) => {
          const { setup, punchline, id } = post;
          return (
            <div
              className="max-w-md mx-auto bg-purple-200 shadow-lg rounded-lg overflow-hidden my-8"
              key={index}>
              <h2 className="text-2xl font-bold text-blue-600 p-4">{setup}</h2>
              <p className="text-pink-500 text-2xl font-bold">{punchline}</p>
            </div>
          );
          Api_;
        })}
      </div>
    </div>
  );
}

export default App;
