import React from 'react'

export default function UpperFooter() {
  return (
    <>
      <footer className="upper-footer">
        <div className="container">
          <div className="row" style={{"padding":"55px 0px"}}>
            <div className="col-lg-3 col-md-6 col-sm-12  pt-5">
              <i className="fa-solid fa-truck" style={{"fontSize":"xxx-large","color":"#57667e"}}></i>
              <h6 className='mt-4'>
                Fast & Free Delivery
              </h6 >
              <p>Free Delivery on all orders</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
              <i className="fa-solid fa-credit-card" style={{"fontSize":"xxx-large","color":"#57667e"}}></i>
              <h6 className='mt-4'>
                Secure Payment
              </h6 >
              <p>Free Delivery on all orders</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
              <i className="fa-solid fa-money-bill-transfer" style={{"fontSize":"xxx-large","color":"#57667e"}}></i>
              <h6 className='mt-4'>
                Money Back Guarantee
              </h6 >
              <p>Free Delivery on all orders</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
              <i className="fa-solid fa-clock-rotate-left" style={{"fontSize":"xxx-large","color":"#57667e"}}></i>
              <h6 className='mt-4'>
                Online Support
              </h6 >
              <p>Free Delivery on all orders</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
