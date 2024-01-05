import React from 'react'
import "../../SCSS/Auth/_reset.scss"

export default function Reset() {
  return (
    <div className='form'>
        <main>
          <form className='pt-5 pb-5 reset-form'>
            <h1 className='text-center'>
              Reset 
            </h1>
            <p className='text-center' style={{ "fontSize": "13px" }}>
              Enter Your new password to get  access
            </p>
            <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
              <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
            </div>
            <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
              <label htmlFor="exampleInputPassword1" className="form-label"><b>Confirm Password</b></label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Confirm Password' />
            </div>
            <div className="d-flex justify-content-end mt-5" style={{ "width": "80%", "margin": "auto" }}>
              <button type="submit" className="auth-btn" style={{ "width": "40%" }}>Reset Passowrd</button>
            </div>
          </form>
      </main>
    </div>
  )
}
