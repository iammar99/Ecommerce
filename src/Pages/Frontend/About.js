import React from 'react'

import img1 from "../../Assets/aboutimg1.png"
import img2 from "../../Assets/aboutimg2.png"

import img4 from "../../Assets/fourthimg.png"
import img5 from "../../Assets/thirdimg.png"

import instaLogo from "../../Assets/instalogo.png"
import instaLogo2 from "../../Assets/instalogo2.png"

export default function About() {
  return (
    <>
      <main>
        <h3 className="text-center fw-bolder my-5">
          OUR STORY
        </h3>
        <p className="mx-auto text-center fs-5 text-secondary w-75 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minus aliquam asperiores, odit a modi perferendis sed nostrum explicabo rerum consequuntur soluta! Cum consectetur dolorem, cumque earum aliquam molestias corporis!
        </p>
        <img src={img1} alt="" className="img-fluid mx-auto d-block" />
        <h3 className="text-center fw-bolder my-5">
          JOURNEY STARTS FROM
        </h3>
        <p className="mx-auto text-center fs-5 text-secondary w-75 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minus aliquam asperiores, odit a modi perferendis sed nostrum explicabo rerum consequuntur soluta! Cum consectetur dolorem, cumque earum aliquam molestias corporis!
        </p>
        <img src={img2} alt="" className="img-fluid mx-auto d-block" />
        <h3 className="text-center fw-bolder my-5">
          2020
        </h3>
        <p className="mx-auto text-center fs-5 text-secondary w-75 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At minus aliquam asperiores, odit a modi perferendis sed nostrum explicabo rerum consequuntur soluta! Cum consectetur dolorem, cumque earum aliquam molestias corporis!
        </p>
        {/* ----- Instagram ----- */}
        <div className="container-fluid mb-5">
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
      </main>
    </>
  )
}
