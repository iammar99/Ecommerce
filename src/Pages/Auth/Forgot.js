import React, { useState } from 'react'
import "../../SCSS/Auth/_forgot.scss"
import { auth } from 'Config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { message } from 'antd';
import { Link, Navigate } from 'react-router-dom';

export default function Forgot() {
  const [email, setEmail] = useState("")
  const handleChange = e => setEmail(s => ({ ...s, [e.target.name]: e.target.value }))
  const handleCLick = (e) => {
    e.preventDefault()
    if (!email) {
      message.error("Enter Email")
    }
    else {
      const mail = email.email
      // console.log(mail)

      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log(email)
          message.success("Sent")
          // Email verification sent!
          // ...
        })
        .catch((error) => {
          console.log("error")
          // ..
        });
    }
    // <Navigate to="/auth/reset"/>
  }
  return (
    <div className='form'>
      <main>
        <form className='pt-4 pb-5 forgot-form'>
          <Link className='ms-3 fs-4' to={"/auth/"} >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <h1 className='text-center mt-3'>
            Forgot Password
          </h1>
          <p className='text-center' style={{ "fontSize": "13px" }}>
            Enter Your details to get access
          </p>
          <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
            <label htmlFor="exampleInputEmail1" className="form-label"><b>Username Or Email address</b></label>
            <input type="email" name='email' className="form-control" placeholder='Username / Email Address' onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-end mt-2" style={{ "width": "80%", "margin": "auto" }}>
            <button type="submit" className="auth-btn" onClick={handleCLick}>Send Link</button>
          </div>
        </form>
      </main>
    </div>
  )
}
