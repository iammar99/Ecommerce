import { useState, useEffect } from "react"
import React from 'react'
import img1 from "../../Assets/sofa1.png"
import img2 from "../../Assets/sofa2.png"
import img3 from "../../Assets/sofa3.png"
import img4 from "../../Assets/sofa4.png"
import img5 from "../../Assets/chair1.png"
import img6 from "../../Assets/chair2.png"
import img7 from "../../Assets/chair3.png"
import img8 from "../../Assets/chair4.png"
import img9 from "../../Assets/chair5.png"

import MultiRangeSlider from "Components/MultiRangeSlider/MultiRangeSlider"

const categories = ["All", "Chairs", "Tables", "Sofas"];
const items = [
  { id: 1, name: "Item 1", category: "Chairs" },
  { id: 2, name: "Item 2", category: "Tables" },
  { id: 3, name: "Item 3", category: "Sofas" }
];


export default function Categories() {
  const [filter, setFilter] = useState("All");

  const handleChange = (e) => {
    setFilter(e.target.value);
    const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);
      if (filteredItems[0].name == "Item 1") {
        // console.log("first")
        let ChairsImg  =  document.getElementsByName("chairs")
        for(let i = 0 ; i < ChairsImg.length ; i++){
          ChairsImg[i].style.display="none";
        }
          // console.log("Done")
      }
      else if (filteredItems[0].name == "Item 2") {
        document.getElementById("sofa").style.display = "none"
        // console.log("second")
      }
      else if (filteredItems[0].name == "Item 3") {
        // console.log("third")
      }
      else {
        // console.log("all")
      }
  }

  return (
    <>
      <main>
        <div className="container my-5">
          <h1 className="fw-bold">
            SHOP WITH US
          </h1>
          <p className="my-3 text-secondary fw-normal">
            Browse from 230 latest items
          </p>



          <div className="row d-flex">
            <span className="first-col">
              <div className="filter">
                <span className="">
                  <i className="fa-solid fa-arrow-up-wide-short fs-3" style={{ "color": "#4dff00" }}></i>
                  <span className=" ms-3 fs-4 ">
                    Filter Product
                  </span>
                </span>
                <ul className='mt-5'>
                  <li>
                    <select value={filter} onChange={handleChange}>
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </li>
                  <li>
                    <select name="Size" id="Size">
                      <option value="Size">Size</option>
                      <option value="Chair">Chair</option>
                      <option value="Table">Table</option>
                      <option value="Bed">Bed</option>
                      <option value="Light">Light</option>
                    </select>
                  </li>
                  <li>
                    <select name="Color" id="Color">
                      <option value="Color">Color</option>
                      <option value="Chair">Black</option>
                      <option value="Table">Red</option>
                      <option value="Bed">White</option>
                      <option value="Light">brown</option>
                    </select>
                  </li>
                  <li>
                    <select name="Price" id="Price">
                      <option value="Price Range">Price Range</option>
                      <option value="Chair">Chair</option>
                      <option value="Table">Table</option>
                      <option value="Bed">Bed</option>
                      <option value="Light">Light</option>
                    </select>
                  </li>
                </ul>
              </div>
              <div className="range-container d-flex flex-column">
                <span className=" ms-3 fs-4 mb-4">
                  Price Range
                </span>
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                />
              </div>
              <div className="checkbox-container">
                <span className=" ms-3 fs-4 ">
                  Latest Product
                </span>
                <div className="checkbox " style={{ "display": "flex", "flexDirection": "column", "alignItems": "baseline" }}>
                  <div className="span">
                    <input type="checkbox" className="check" name="" id="check1" />
                    <label htmlFor="check1" className="text-secondary">Any</label>
                  </div>
                  <div className="span">
                    <input type="checkbox" className="check" name="" id="check2" />
                    <label htmlFor="check2" className="text-secondary">Today</label>
                  </div>
                  <div className="span">
                    <input type="checkbox" className="check" name="" id="check3" />
                    <label htmlFor="check3" className="text-secondary">Last 2 days</label>
                  </div>
                  <div className="span">
                    <input type="checkbox" className="check" name="" id="check4" />
                    <label htmlFor="check4" className="text-secondary">Last 5 days</label>
                  </div>
                  <div className="span">
                    <input type="checkbox" className="check" name="" id="check5" />
                    <label htmlFor="check5" className="text-secondary">Last 7 days</label>
                  </div>
                  <div className="span">
                    <input type="checkbox" className="check" name="" id="check6" />
                    <label htmlFor="check6" className="text-secondary">Last 10 days</label>
                  </div>
                  <div className="span">
                    <input type="checkbox" className="check" name="" id="check7" />
                    <label htmlFor="check7" className="text-secondary">Last 15 days</label>
                  </div>
                </div>
              </div>
            </span>
            <span className="second-col">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img1} alt="" id='sofa' className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img2} alt="" id='' className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img3} alt="" id='' className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img4} alt="" id='' className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img5} alt="" name="chairs" className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img6} alt="" name="chairs" className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img7} alt="" name="chairs" className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img8} alt="" name="chairs" className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <img src={img9} alt="" name="chairs" className="d-block mx-sm-auto" style={{ "width": "300px", "height": "300px" }} />
                    <p className='mt-3'>
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </p>
                    <b className="price">
                      $367
                    </b>
                  </div>
                </div>
              </div>
              <button className="discover-btn1 d-block mx-auto my-5">
                BROWSE MORE
              </button>
            </span>
          </div>
        </div>
      </main>
    </>
  )
}
