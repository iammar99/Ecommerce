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

import img from "../../Assets/secondimg.png"

import img1 from "../../Assets/homeimg3.png"
import img2 from "../../Assets/homeimg2.png"
import img3 from "../../Assets/homeimg.png"

import img4 from "../../Assets/fourthimg.png"
import img5 from "../../Assets/thirdimg.png"

import instaLogo from "../../Assets/instalogo.png"
import instaLogo2 from "../../Assets/instalogo2.png"

export default function Home() {


  const handleSofa = () => {
    document.getElementById("sofa-btn").classList.add("active")
    document.getElementById("sofa-container").style.display = "flex"

    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")

    document.getElementById("decor-container").style.display = "none"
    document.getElementById("light-container").style.display = "none"
    document.getElementById("bed-container").style.display = "none"
    document.getElementById("table-container").style.display = "none"
    document.getElementById("chair-container").style.display = "none"
  }

  const handleTable = () => {
    document.getElementById("table-btn").classList.add("active")
    document.getElementById("table-container").style.display = "flex"

    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")

    document.getElementById("decor-container").style.display = "none"
    document.getElementById("light-container").style.display = "none"
    document.getElementById("bed-container").style.display = "none"
    document.getElementById("sofa-container").style.display = "none"
    document.getElementById("chair-container").style.display = "none"
  }

  const handleChair = () => {
    document.getElementById("chair-btn").classList.add("active")
    document.getElementById("chair-container").style.display = "flex"

    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")

    document.getElementById("decor-container").style.display = "none"
    document.getElementById("light-container").style.display = "none"
    document.getElementById("bed-container").style.display = "none"
    document.getElementById("sofa-container").style.display = "none"
    document.getElementById("table-container").style.display = "none"
  }


  const handleBed = () => {
    document.getElementById("bed-btn").classList.add("active")
    document.getElementById("bed-container").style.display = "flex"

    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")

    document.getElementById("decor-container").style.display = "none"
    document.getElementById("light-container").style.display = "none"
    document.getElementById("chair-container").style.display = "none"
    document.getElementById("sofa-container").style.display = "none"
    document.getElementById("table-container").style.display = "none"
  }


  const handlelight = () => {
    document.getElementById("light-btn").classList.add("active")
    document.getElementById("light-container").style.display = "flex"


    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("decor-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")

    document.getElementById("decor-container").style.display = "none"
    document.getElementById("bed-container").style.display = "none"
    document.getElementById("chair-container").style.display = "none"
    document.getElementById("sofa-container").style.display = "none"
    document.getElementById("table-container").style.display = "none"
  }



  const handleDecor = () => {
    document.getElementById("decor-btn").classList.add("active")
    document.getElementById("decor-container").style.display = "flex"

    document.getElementById("sofa-btn").classList.remove("active")

    document.getElementById("sofa-btn").classList.remove("active")
    document.getElementById("light-btn").classList.remove("active")
    document.getElementById("bed-btn").classList.remove("active")
    document.getElementById("chair-btn").classList.remove("active")
    document.getElementById("table-btn").classList.remove("active")

    document.getElementById("light-container").style.display = "none"
    document.getElementById("bed-container").style.display = "none"
    document.getElementById("chair-container").style.display = "none"
    document.getElementById("sofa-container").style.display = "none"
    document.getElementById("table-container").style.display = "none"
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
          <div className="item-container mb-5" style={{ "margin": "0 auto", "justifyContent": "center", "overflowX": "hidden", "width": "80%", "display": "flex" }}>
            {/* ------ Sofa ------ */}
            <div className="sofa-container" id='sofa-container'  >
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa1} className='img-fluid' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa2} className='img-fluid' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={sofa3} className='img-fluid' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
              </div>
            </div>
            {/* ------ Table ------ */}
            <div className="table-container mt-5 " id='table-container' style={{ "display": "none" }} >
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={table1} className='img-fluid' style={{ "minWidth": "257px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={table2} className='img-fluid' style={{ "minWidth": "257px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={table3} className='img-fluid' style={{ "minWidth": "257px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
              </div>
            </div>
            {/* ------ Chair ------ */}
            <div className="chair-container mt-5" id='chair-container' style={{ "display": "none" }}>
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={chair1} className='img-fluid' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={chair2} className='img-fluid' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={chair3} className='img-fluid' alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
              </div>
            </div>
            {/* ------ Bed ------ */}
            <div className="bed-container mt-5" id='bed-container' style={{ "display": "none" }}>
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={bed1} className='img-fluid' style={{ "minWidth": "300px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={bed2} className='img-fluid' style={{ "minWidth": "300px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={bed3} className='img-fluid' style={{ "minWidth": "300px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
              </div>
            </div>
            {/* ------ Lighting ------ */}
            <div className="light-container mt-5" id='light-container' style={{ "display": "none" }}>
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={light1} className='img-fluid' style={{ "minWidth": "300", "height": "212px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={light2} className='img-fluid' style={{ "minWidth": "300", "height": "212px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={light3} className='img-fluid' style={{ "minWidth": "300", "height": "212px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
              </div>
            </div>
            {/* ------ Decor ------ */}
            <div className="decor-container mt-5" id='decor-container' style={{ "display": "none" }}>
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={decor1} className='img-fluid' style={{ "minWidth": "300", "height": "212px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-6" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={decor2} className='img-fluid' style={{ "minWidth": "300", "height": "212px" }} alt="" />
                  <p className='mt-3'>
                    Bly Microfiber / Microsuede 56" Armless Loveseat
                  </p>
                  <b className="price">
                    $367
                  </b>
                </div>
                <div className="col col-lg-12 col-xl-4 col-md-12" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
                  <img src={decor3} className='img-fluid' style={{ "minWidth": "300", "height": "212px" }} alt="" />
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
        {/* -------- Add -------- */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 p-0">
              <img src={img} alt="" className='img-fluid' style={{ "minWidth": "100%", "minHeight": "-webkit-fill-available" }} />
            </div>
            <div className="col-lg-6 col-md-12" style={{ "backgroundColor": "rgb(242, 225, 217)", "padding": "88px 50px" }}>
              <h1 className="my-3" style={{ "fontWeight": "800" }}>
                BEST FURNITURE MANUFACTURER
              </h1>
              <p className="my-3">
                Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <p className="my-3">
                Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <button className="discover-btn">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
        {/* -------- More --------  */}
        <div className="container-fluid" style={{ "width": "100%" }}>
          <h1 className="first-heading text-center mb-4">
            PRODUCTS YOU MAY LIKE
          </h1>
          <p className="text-secondary text-center" style={{ "width": "55%", "margin": "33px auto" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus voluptas officia eaque, maxime
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-6 px-4" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
              <img src={img1} alt="" />
              <p className='mt-3'>
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </p>
              <b className="price">
                $367
              </b>
            </div>
            <div className="col-lg-4 col-md-6 px-4" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
              <img src={img2} alt="" />
              <p className='mt-3'>
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </p>
              <b className="price">
                $367
              </b>
            </div>
            <div className="col-lg-4 col-md-12 px-4" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
              <img src={img3} alt="" />
              <p className='mt-3'>
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </p>
              <b className="price">
                $367
              </b>
            </div>
            <button className="discover-btn1" style={{ "margin": "6% auto" }}>
              DISCOVER MORE
            </button>
          </div>
        </div>
        {/* -------- Instagram -------- */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-12 pb-3 px-5">
              <img src={instaLogo} alt="" style={{ "width": "16%" }} />
              <h1 className="first-heading mb-4" style={{ "fontWeight": "700" }}>
                GET INSIPIRED WITH INSTAGRAM
              </h1>
              <p className="text-secondary" style={{ "width": "90%" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus voluptas officia eaque, maxime
              </p>
              <button className="discover-btn1">
                DISCOVER MORE
              </button>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-0">
              <img src={img4} className='img-fluid insta-img' style={{ "height": "-webkit-fill-available", "width": "100%" }} alt="" />
              <img src={instaLogo2} alt="" className='insta-logo-2' style={{ "width": "34px", "position": "relative", "bottom": "50%", "left": "50%", "transform": "translate(50%, -50%)" }} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-0">
              <img src={img5} className='img-fluid insta-img' style={{ "height": "-webkit-fill-available", "width": "100%" }} alt="" />
              <img src={instaLogo2} alt="" className='insta-logo-2' style={{ "width": "34px", "position": "relative", "bottom": "50%", "left": "50%", "transform": "translate(50%, -50%)" }} />
            </div>
          </div>
        </div>
        {/* -------- More --------  */}
        <div className="container-fluid" style={{ "width": "100%" }}>
          <h1 className="first-heading text-center mb-4">
            TOP PICKS
          </h1>
          <p className="text-secondary text-center" style={{ "width": "55%", "margin": "33px auto" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus voluptas officia eaque, maxime
          </p>
          <div className="row">
            <div className="col-lg-4 col-md-6 px-4" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
              <img src={sofa1} style={{"height":"244px"}} alt="" />
              <p className='mt-3'>
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </p>
              <b className="price">
                $367
              </b>
            </div>
            <div className="col-lg-4 col-md-6 px-4" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
              <img src={sofa2} style={{"height":"244px"}} alt="" />
              <p className='mt-3'>
                 Bly Microfiber / Microsuede 56" Armless Loveseat
              </p>
              <b className="price">
                $367
              </b>
            </div>
            <div className="col-lg-4 col-md-12 px-4" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "textAlign": "center" }}>
              <img src={sofa3} style={{"height":"244px"}} alt="" />
              <p className='mt-3'>
                Bly Microfiber / Microsuede 56" Armless Loveseat
              </p>
              <b className="price">
                $367
              </b>
            </div>
            <button className="discover-btn1" style={{ "margin": "6% auto" }}>
              DISCOVER MORE
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
