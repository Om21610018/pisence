import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Footer from "./components/Footer";
import jsonData from "./data/data.json";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="w-[100%] bg-slate-950 ">
      <Header></Header>
      <div className="  bg-slate-950 lg:w-[60%] md:w-[75%] w-[80%] mx-auto ">
        <Routes>
          <Route path="/" data={data} element={<Home></Home>}></Route>
          <Route path="/tracking" element={<div>Tracking</div>}></Route>
          <Route path="/analytics" element={<div>analytics</div>}></Route>
          <Route path="/performance" element={<div>Hello</div>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
