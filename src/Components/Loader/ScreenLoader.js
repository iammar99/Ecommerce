import React from 'react'
import logo from "../../Assets/logo2.png"

export default function ScreenLoader() {
    return (
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "height": "100vh" }}>
            <img src={logo} alt="logo" style={{ "width": "44px", "position": "absolute" }} />
            <svg viewBox="25 25 50 50">
                <circle r={20} cy={50} cx={50} />
            </svg>
        </div>
    )
}
