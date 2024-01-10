import React, { useState, useEffect } from "react";

function Sidebar(props) {
  const [doFilter, setDoFilter] = useState("");
  const [search, SetSearch] = useState("");
  const [option, setOption] = useState("");

  const handleChange = (e) => {
    setDoFilter(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);

    SetSearch(e.target.value);
  };
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
  };
  useEffect(() => {
    const index = doFilter.indexOf("-");
    const min = parseInt(doFilter.slice(0, index)) || 0;
    const max = parseInt(doFilter.slice(index + 1)) || 1000000;
    console.table(min, max);
    props.filter(min, max, search, option);
  }, [doFilter, search, option]);

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <filter className="w-100 text-center mb-4">
        <h3>Filter</h3>
        <div className="">
          <input
            type="radio"
            id="priceInput1"
            name="price"
            value={"0-25"}
            onChange={handleChange}
          ></input>
          <label for="PriceInput1">$0-25</label>
        </div>
        <div>
          <input
            type="radio"
            id="priceInput2"
            name="price"
            value={"26-50"}
            onChange={handleChange}
          ></input>
          <label for="PriceInput2">$26-50</label>
        </div>
        <div>
          <input
            type="radio"
            id="priceInput3"
            name="price"
            value={"51-75"}
            onChange={handleChange}
          ></input>
          <label for="PriceInput3">$51-75</label>
        </div>
        <div>
          <input
            type="radio"
            id="priceInput4"
            name="price"
            value={"76-100"}
            onChange={handleChange}
          ></input>
          <label for="PriceInput4">$76-100</label>
        </div>
        <div>
          <input
            type="radio"
            id="priceInput5"
            name="price"
            value={"101-200"}
            onChange={handleChange}
          ></input>

          <label for="PriceInput5">$101-200</label>
        </div>
      </filter>
      <search className="">
        <input
          type="text"
          placeholder="search here..."
          className="border text-center my-4"
          onChange={handleSearch}
        />
      </search>
      <select className="my-4 p-1" value={option} onChange={handleSelectChange}>
        <option>Select from Category</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
}

export default Sidebar;
