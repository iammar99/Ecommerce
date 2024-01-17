import React from 'react'
import { Link } from 'react-router-dom'
import "../../SCSS/Auth/_login.scss"
import { useState } from 'react'
import Toastify from 'toastify-js'
import { auth } from 'Config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from 'Context/AuthContext';

export default function Login() {

  const [currentUser, setCurrentUser] = useState({})
  const handleChange = e => setCurrentUser(s => ({ ...s, [e.target.name]: e.target.value }))
  const { dispatch } = useAuthContext()



  const handleSubmit = (e) => {

    let { email, password } = currentUser
    e.preventDefault()
    if (!email || !password) {
      Toastify({
        text: "Please Fill All the Fields",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, red, brown)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
    else {

      // setIsProccessing(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          // console.log('isProccessing', isProccessing)
          const user = userCredential.user;
          // console.log('user', user)
          // console.log('userCredential', userCredential)
          Toastify({
            text: "Logged in",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #77f600, #00cd3e)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          dispatch({ type: "Set_Logged_In", payload: { user } })
          localStorage.setItem("Token", "true")
          localStorage.setItem("User", JSON.stringify(user))
          // setIsProccessing(false)
          // ...
        })
        .catch((error) => { 
          // setIsProccessing(false)
          Toastify({
            text: "Error Occured !! Try making another account",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, red, brown)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          console.log(email)
          console.log(password)
          // console.log('error', error)
        });
      // console.log(email)
      // console.log(password)

    }
  }
  return (
    <div className='form'>
      <main>
        <form className='pt-5 pb-5 login-form'>
          <h1 className='text-center'>
            Login
          </h1>
          <p className='text-center' style={{ "fontSize": "13px" }}>
            Enter Login details to get access
          </p>
          <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
            <label htmlFor="exampleInputEmail1" className="form-label"><b>Username Or Email address</b></label>
            <input type="email" className="form-control" name='email' placeholder='Username / Email Address' onChange={handleChange} />
          </div>
          <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
            <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
            <input type="password" className="form-control" name='password' placeholder='Enter Password' onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-between" style={{ "width": "80%", "margin": "auto" }}>
            <div className="mb-3 form-check" style={{ "display": "flex", "alignItems": "center" }}>
              <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{ "padding": "12px", "borderRadius": "3px" }} />
              <label className="form-check-label" htmlFor="exampleCheck1"><b>Keep me Logged In</b></label>
            </div>
            <Link to={"/auth/forgot"}>
              Forgot Password
            </Link>
          </div>
          <div className="d-flex justify-content-between mt-5" style={{ "width": "80%", "margin": "auto" }}>
            <p className='my-0' style={{ "height": "fit-content", "fontSize": "14px" }}>
              Don't have an account? <Link to={"/auth/register"}>Sign UP</Link> here
            </p>
            <button type="submit" className="auth-btn" onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </main>
    </div>
  )
}

