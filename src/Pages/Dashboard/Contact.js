import React from 'react'

export default function Contact() {
  return (
    <>
      <main>
        <div className="container">
          <h2 className="fs-bold">Get in Touch</h2>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <textarea className="form-control" placeholder='Enter You Message here' style={{ "width": "700px" }} id="exampleFormControlTextarea1" rows="8" cols="20"></textarea>
              </div>
              <div className="d-flex justify-content-between">
                <input type="text" placeholder='Enter You  Full Name' id="inputPassword5" className="form-control" style={{ "width": "340px", "borderRadius": "0px", "height": "68px" }} aria-describedby="passwordHelpBlock" />
                <div className="mb-3">
                  <input type="email" className="form-control" id="exampleFormControlInput1" style={{ "width": "340px", "borderRadius": "0px", "height": "68px" }} placeholder="Enter Your Email" />
                </div>
              </div>
              <input type="text" name="" className="form-control" style={{ "height": "68px" }} placeholder='Enter Your Subject' id="" />
              <button className="discover-btn1" style={{ "width": "150px", "margin": "20px 0px" }}>
                Send
              </button>
            </div>
            <div className="col">
              <div className="d-flex" style={{ "alignItems": "center" }}>
                <span><i className="mx-5  fs-4 text-secondary fa-solid fa-house" style={{ "fontSize": " xx-large" }}></i></span>
                <span className="d-flex flex-column">
                  <b>
                    Buttonwood, California.
                  </b>
                  <p>
                    Rosemead, CA 91770
                  </p>
                </span>
              </div>
              <div className="d-flex" style={{ "alignItems": "center" }}>
                <span><i className="mx-5  fs-4 text-secondary fa-solid fa-mobile-screen" style={{ "fontSize": " xx-large" }}></i></span>
                <span className="d-flex flex flex-column">
                  <b>
                    +1 253 565 2365
                  </b>
                  <p>
                    Mon to Fri 9am to 6pm
                  </p>
                </span>
              </div>
              <div className="d-flex" style={{ "alignItems": "center" }}>
                <span><i className="mx-5  fs-4 text-secondary fa-solid fa-envelope" style={{ "fontSize": " xx-large" }}></i></span>
                <span className="d-flex flex-column">
                  <b>
                    support@colorlib.com
                  </b>
                  <p>
                    Send us your query anytime!
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
