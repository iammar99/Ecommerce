import React, { useEffect, useState } from 'react'

import img1 from "../../Assets/chair1.png"
import img2 from "../../Assets/chair2.png"

export default function Cart() {

  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleDelete = () => {
document.getElementById("first-row").style.display = "none"
  }
  return (
    <main>
      <div className="container">
        <div className="row mt-5">
          <table className='text-secondary'>
            <thead>
              <tr>
                <th className='first-heading' style={{ "width": "59%" }}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr id='first-row'>
                <td style={{ "width": "59%" }} className='first-cell' >
                  <img src={img1} alt="" style={{ "width": "30%" }} />
                  Minimalistic shop for multipurpose use
                </td>
                <td>
                  $36
                </td>
                <td style={{ "display": "flex", "justifyContent": "flex-start", "alignItems": "center", "height": "122px" }}>
                  {quantity}
                  <span className="d-flex flex-column">
                    <button onClick={handleIncrement} className="border-0 bg-transparent">
                      +
                    </button>
                    <button onClick={handleDecrement} className="border-0 bg-transparent">
                      -
                    </button>
                  </span>
                </td>
                <td>
                  ${total}
                </td>
                <td onClick={handleDelete} style={{ "width": "fit-content", "position": "absolute" }}>
                  &#10060;
                </td>
              </tr>
              <tr>
                <td style={{ "width": "59%" }} className='first-cell'>
                  <img src={img2} alt="" style={{ "width": "30%" }} />
                  Minimalistic shop for multipurpose use
                </td>
                <td>
                  $36
                </td>
                <td style={{ "display": "flex", "justifyContent": "flex-start", "alignItems": "center", "height": "122px" }} id='first'>
                  {quantity}
                  <span className="d-flex flex-column">
                    <button onClick={handleIncrement} className="border-0 bg-transparent">
                      +
                    </button>
                    <button onClick={handleDecrement} className="border-0 bg-transparent">
                      -
                    </button>
                  </span>
                </td>
                <td>
                  ${total}
                </td>
                <td onClick={handleDelete} style={{ "width": "fit-content", "position": "absolute" }}>
                  &#10060;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
