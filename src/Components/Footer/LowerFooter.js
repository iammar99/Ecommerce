import React from 'react'
import logo from "../../Assets/logo2.png"

export default function LowerFooter() {

  let year = new Date()
  year = year.getFullYear()
  return (
    <footer className="lower-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus voluptas officia eaque, maxime
            </p>
            {/* <p>
              hello
            </p> */}
            <div className="brand-icons icon-1">
            <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="brand-icons icon-2">
            <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="brand-icons icon-3">
            <i className="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <b className='mb-3 d-block'>
              Quick Links
            </b> 
            <li className='mt-3'>
              Image Liscence
            </li>
            <li className='mt-3'>
              Style Guide
            </li>
            <li className='mt-3'>
              Privacy Policy
            </li>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <b className='mb-3 d-block'>
              Shop Category
            </b>
            <li className='mt-3'>
              Image Liscence
            </li>
            <li className='mt-3'>
              Style Guide
            </li>
            <li className='mt-3'>
              Privacy Policy
            </li>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <b className='mb-3 d-block'>
              Partners
            </b>
            <li className='mt-3'>
              Image Liscence
            </li>
            <li className='mt-3'>
              Style Guide
            </li>
            <li className='mt-3'>
              Privacy Policy
            </li>
          </div>
        </div>
      </div>
      <p className="text-white text-center p-0">
        Copyright © {year} All rights reserved | This template is made by 
        <span className="text-warning">
         &nbsp; Ammar
        </span>
      </p>
    </footer>
  )
}
