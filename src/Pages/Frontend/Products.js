import React from 'react'

import sofa1 from "../../Assets/sofa1.png"
import sofa2 from "../../Assets/sofa2.png"
import sofa3 from "../../Assets/sofa3.png"

import table1 from "../../Assets/table(1).png"
import table2 from "../../Assets/table2.png"
import table3 from "../../Assets/table3.png"

import chair1 from "../../Assets/chair1.png"
import chair2 from "../../Assets/chair2.png"
import chair3 from "../../Assets/chair3.png"

import bed1 from "../../Assets/bed1.png"
import bed2 from "../../Assets/bed2.png"
import bed3 from "../../Assets/bed3.png"

import light1 from "../../Assets/light1.png"
import light2 from "../../Assets/light2.png"
import light3 from "../../Assets/light3.png"

import decor1 from "../../Assets/decor1.png"
import decor2 from "../../Assets/decor2.png"
import decor3 from "../../Assets/decor3.png"

export default function Products() {

  const handleSofa = () => {
    document.getElementById("sofa-btn").classList.add("active")
    // document.getElementById("sofa-container").style.display = "flex"

    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")

    document.getElementById("img-1").src = sofa1
    document.getElementById("img-2").src = sofa2
    document.getElementById("img-3").src = sofa3
    document.getElementById("img-4").src = sofa1
    document.getElementById("img-5").src = sofa2
    document.getElementById("img-6").src = sofa3
    document.getElementById("img-7").src = sofa1
    document.getElementById("img-8").src = sofa2
    document.getElementById("img-9").src = sofa3
  }

  const handleTable = () => {
    document.getElementById("table-btn").classList.add("active")
    // document.getElementById("table-container").style.display = "flex"

    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")

    document.getElementById("img-1").src = table1
    document.getElementById("img-2").src = table2
    document.getElementById("img-3").src = table3
    document.getElementById("img-4").src = table1
    document.getElementById("img-5").src = table2
    document.getElementById("img-6").src = table3
    document.getElementById("img-7").src = table1
    document.getElementById("img-8").src = table2
    document.getElementById("img-9").src = table3
  }

  const handleChair = () => {
    document.getElementById("chair-btn").classList.add("active")
    // document.getElementById("chair-container").style.display = "flex"

    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")

    document.getElementById("img-1").src = chair1
    document.getElementById("img-2").src = chair2
    document.getElementById("img-3").src = chair3
    document.getElementById("img-4").src = chair1
    document.getElementById("img-5").src = chair2
    document.getElementById("img-6").src = chair3
    document.getElementById("img-7").src = chair1
    document.getElementById("img-8").src = chair2
    document.getElementById("img-9").src = chair3

  }


  const handleBed = () => {
    document.getElementById("bed-btn").classList.add("active")
    // document.getElementById("bed-container").style.display = "flex"

    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")

    document.getElementById("img-1").src = bed1
    document.getElementById("img-2").src = bed2
    document.getElementById("img-3").src = bed3
    document.getElementById("img-4").src = bed1
    document.getElementById("img-5").src = bed2
    document.getElementById("img-6").src = bed3
    document.getElementById("img-7").src = bed1
    document.getElementById("img-8").src = bed2
    document.getElementById("img-9").src = bed3

  }
  const handlelight = () => {
    document.getElementById("light-btn").classList.add("active")
    // document.getElementById("light-container").style.display = "flex"


    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")

    document.getElementById("img-1").src = light1
    document.getElementById("img-2").src = light2
    document.getElementById("img-3").src = light3
    document.getElementById("img-4").src = light1
    document.getElementById("img-5").src = light2
    document.getElementById("img-6").src = light3
    document.getElementById("img-7").src = light1
    document.getElementById("img-8").src = light2
    document.getElementById("img-9").src = light3
  }



  const handleDecor = () => {
    document.getElementById("decor-btn").classList.add("active")
    // document.getElementById("decor-container").style.display = "flex"

    document.getElementById("sofa-btn").classList.remove("active")

    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")

    document.getElementById("img-1").src = decor1
    document.getElementById("img-2").src = decor2
    document.getElementById("img-3").src = decor3
    document.getElementById("img-4").src = decor1
    document.getElementById("img-5").src = decor2
    document.getElementById("img-6").src = decor3
    document.getElementById("img-7").src = decor1
    document.getElementById("img-8").src = decor2
    document.getElementById("img-9").src = decor3
  }



  return (
    <>
      <main>
        <h1 className="first-heading text-center mb-4">
          POPULAR PRODUCTS
        </h1>
        <p className="text-secondary text-center" style={{ "width": "55%", "margin": "33px auto" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus voluptas officia eaque, maxime
        </p>
        {/* -------- Products -------- */}
        <div className="container two-container">
          <ul className="nav justify-content-center">
            <li className="nav-item active">
              <a className="nav-link  fw-medium active" id='sofa-btn' style={{ "cursor": "pointer" }} onClick={handleSofa}>
                Sofa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  fw-medium" id='table-btn' style={{ "cursor": "pointer" }} onClick={handleTable}>
                Table
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  fw-medium" id='chair-btn' style={{ "cursor": "pointer" }} onClick={handleChair}>
                Chair
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  fw-medium" id='bed-btn' style={{ "cursor": "pointer" }} onClick={handleBed}>
                Bed
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  fw-medium" id='light-btn' style={{ "cursor": "pointer" }} onClick={handlelight}>
                Lighting
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  fw-medium" id='decor-btn' style={{ "cursor": "pointer" }} onClick={handleDecor}>
                Decor
              </a>
            </li>
          </ul>
          <hr />
          <div className="item-container mb-5" style={{ "margin": "0 auto", "justifyContent": "center", "overflowX": "hidden", "width": "80%" }}>
            {/* ------ All images container ------ */}
            <div className="sofa-container" id='sofa-container'  >
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa1} className='img-fluid' id='img-1' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa2} className='img-fluid' id='img-2' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa3} className='img-fluid' id='img-3' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa1} className='img-fluid' id='img-4' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa2} className='img-fluid' id='img-5' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa3} className='img-fluid' id='img-6' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa1} className='img-fluid' id='img-7' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa2} className='img-fluid' id='img-8' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa3} className='img-fluid' id='img-9' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="discover-btn1" style={{ "margin": "6% auto" }}>
          DISCOVER MORE
        </button>
      </main>
    </>
  )
}
