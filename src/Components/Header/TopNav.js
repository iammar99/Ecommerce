import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/logo2.png"
import userImg from "../../Assets/user-img.png"
import { message } from 'antd'
import { auth } from 'Config/firebase'
import { signOut } from 'firebase/auth'
import { useAuthContext } from 'Context/AuthContext';

export default function TopNav() {
  const {dispatch } = useAuthContext()
  const {isAuth} = useAuthContext()

  // let user = JSON.parse(localStorage.getItem("user"))
  // if (!user) {
  //   let name = user.fullname
  // }
  // let profileImg

  const handleFocus = () => {
    document.getElementById("account-drop-down").style.display = "block"
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Loggoed Out')
        message.success("Loggoed Out")
        localStorage.setItem("token","false")
        localStorage.setItem("user",{})
        dispatch({ type: "Set_Logged_Out", payload:{}})
        
      })
      .catch((error) => { 
        console.log('error', error)
        // ..
      });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" to="/frontend#" style={{}}><img src={logo} alt="" /></a>
          <label className="navbar-toggler bar border-0" ype="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" htmlFor="check">
            <input type="checkbox" id="check" />
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <div className="paste-button">
                <button className="button nav-link">Page</button>
                <div className="dropdown-content">
                  <Link className="nav-link" to="/dashboard/cart">
                    Cart
                  </Link>
                  <Link className="nav-link" to="/categories">
                    Category
                  </Link>
                  <Link className="nav-link" to="/dashboard/Checkout">
                    Checkout
                  </Link>
                  <Link className="nav-link" to="/details">
                    Product Details
                  </Link>
                </div>
              </div>

              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/contact">Contact</Link>
              </li>
            </ul>
            <form className='search-form' role="search">
              <div className="input-container">
                <input type="text" name="text" className="input" placeholder="Search Products" />
                <span className="icon">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </div>
              <Link className="nav-link my-account" onClick={handleFocus} style={{ "display": "flex", "alignItems": "center", "cursor": "pointer" }} >
                My Account</Link>
              <b style={{ "display": "flex", "alignItems": "center" }}><i className="fa-solid fa-bucket"></i></b>
            </form>
          </div>
        </div>
      </nav>
      <div className="account-drop-down" id='account-drop-down'>
        <div className="profile">
          <img src={userImg} alt={userImg} className="profile-img" />
          <h5>
            {
              "UserName"
            }
          </h5>
        </div>
        <ul className='ps-2'>
          <li>
            <Link to="/dashboard/profile"><i className="far fa-address-card"></i> &nbsp;&nbsp;Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/cart">Cart</Link>
          </li>
          <li>
            <Link to={"/terms"}>Terms And Conditions</Link>
          </li>
          <li>
            <hr style={{ "width": "70%", "margin": "12px auto" }} />
          </li>
          <li>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </>
  )
}
