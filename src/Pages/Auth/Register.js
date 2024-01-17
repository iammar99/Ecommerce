import React from 'react'
import { Link } from 'react-router-dom'
import "../../SCSS/Auth/_register.scss"
import { useState } from 'react'
import Toastify from 'toastify-js'
// --------- Auth ------------
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'Config/firebase';
// ------------FireStore -----------
import { doc, setDoc } from "firebase/firestore";
import {fireStore} from "Config/firebase"
import { useAuthContext } from 'Context/AuthContext';


export default function Register() {

  const {dispatch } = useAuthContext()
  const [currentUser, setCurrentUser] = useState({})
  const handleChange = e => setCurrentUser(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    let { email, fullname, password, confirmPassword } = currentUser
    if (!email || !fullname || !password || !confirmPassword) {
      Toastify({
        text: "Please fill all the fields",
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
    // console.log('currentUser', currentUser)
    createUserWithEmailAndPassword(auth, email, fullname, password, confirmPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        let userToStore =  {
          id:user.uid ,
          fullname ,
          email
        }
        // currentUser = {...currentUser , id:user.uid}
        // console.log('user', user)
        localStorage.setItem("token","true")
        let activeUser = JSON.stringify(userToStore)
        localStorage.setItem("user",activeUser)
        dispatch({ type: "Set_Logged_In", payload: { currentUser } })
        setDoc(doc(fireStore, "Users",user.uid) , { email, fullname, id: user.uid })
        Toastify({
          text: "User Registered",
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
        // ...
      })
      .catch((error) => {
        console.log('error', error)
        Toastify({
          text: "Error Occured",
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
      });
  }
  return (
    <div className='form'>
      <main>
        <form className='pt-5 pb-5 register-form'>
          <h1 className='text-center'>
            Register
          </h1>
          <p className='text-center' style={{ "fontSize": "13px" }}>
            Create Your account  to get full access
          </p>
          <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
            <label htmlFor="exampleInputEmail1" className="form-label"><b>Full Name</b></label>
            <input type="text" className="form-control" placeholder='Enter full Name' name='fullname' onChange={handleChange} />
          </div>
          <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
            <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
            <input type="email" className="form-control" placeholder='Username / Email Address' name='email' onChange={handleChange} />
          </div>
          <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
            <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
            <input type="password" className="form-control" placeholder='Enter Password' name='password' onChange={handleChange} />
          </div>
          <div className="mb-3" style={{ "width": "79%", "margin": "auto" }}>
            <label htmlFor="exampleInputPassword1" className="form-label"><b>Confirm Password</b></label>
            <input type="password" className="form-control" placeholder='Confirm Password' name='confirmPassword' onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-between mt-5" style={{ "width": "80%", "margin": "auto" }}>
            <p className='my-0' style={{ "height": "fit-content", "fontSize": "14px" }}>
              Already have an account? <Link to={"/auth"}>Login</Link> here
            </p>
            <button type="submit" className="auth-btn" onClick={handleSubmit}>Sign UP</button>
          </div>
        </form>
      </main>
    </div>
  )
}
