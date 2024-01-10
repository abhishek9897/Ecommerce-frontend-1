import "./App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Header from "./Components/Header";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpecificProduct from "./SpecificProduct";
import CartItems from "./CartItems";
import Sidebar from "./Sidebar";
import { UseTheme } from "./demo";

function App() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const { theme } = UseTheme();
  console.log("sfhbdf", theme);

  const handleFilter = (min, max, search, option) => {
    setData(() => {
      //  when we want more filter dependencies, like i want to show based on price + also what the user search + and what the catory the user have chosen
      //  then we can do filter method again and again in any fashion and just add the dependencies in the useEffect dep.

      return originalData
        ?.filter((ele, index) => {
          if (ele.title.toUpperCase().includes(search.toUpperCase())) {
            return ele;
          } else {
            return "";
          }
        })
        .filter((ele, index) => {
          return min <= ele.price && ele.price <= max;
        })
        .filter((ele, index) => {
          if (option) {
            return ele.category == option;
          } else {
            return ele;
          }
        });
    });
  };

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await axios.get("https://fakestoreapi.com/products/");

        console.log(data.data);
        setData(data.data);
        setOriginalData(data.data);
      };
      getData();
    } catch (err) {
      console.log("err", err);
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <div
        className="mt-5 pt-2 "
        // style={{ backgroundColor: "#22092C", color: "white" }}
      >
        <div
          style={{
            backgroundColor: "#2D3250",
            color: "white",
            height: "95vh",
            position: "fixed",
            top: "55px",
            width: "230px",
            zIndex: "1001",
          }}
        >
          <Sidebar
            filter={handleFilter}
            // style={{ position: "fixed", top: 0, left: 0, right: 0 }}
          />
        </div>
        <div
          es={10}
          className={`page-wrapper ${
            theme == "light" ? "bg-primary" : "bg-secondary"
          }`}
        >
          <Routes>
            <Route path="/" element={<Products data={data} />} />
            <Route path="/:id" element={<SpecificProduct />} />
            <Route path="/CartItems" element={<CartItems />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
