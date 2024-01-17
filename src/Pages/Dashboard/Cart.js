import React, { useEffect, useState } from 'react'

import img1 from "../../Assets/chair1.png"
import img2 from "../../Assets/chair2.png"

export default function Cart() {

  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(36)

  const tableData = [
    {
      productDescription: 'Minimalistic shop for multipurpose use',
      imgSrc: img1, // Assuming img1 is defined somewhere
      price,
      quantity // You need to define or get the value of quantity
      // You need to define or get the value of total
    }
  ];
  const [total, setTotal] = useState(tableData[0].price)
  const handleIncrement = () => {
    setQuantity(quantity + 1)
    setTotal(total + tableData[0].price)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      setTotal(total - tableData[0].price)
    }
  }

  return (
    <main>
      <div className="container">
        <div className="row mt-5">
          <table className='text-secondary'>
            <thead>
              <tr>
                <th className='first-heading' style={{ width: '59%' }}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((rowData, i) => (
                <tr key={i}>
                  <td style={{ width: '59%' }} className='first-cell'>
                    <img src={rowData.imgSrc} alt="" style={{ width: '30%' }} />
                    {rowData.productDescription}
                  </td>
                  <td>${rowData.price}</td>
                  <td style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '122px' }}>
                    {rowData.quantity}
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
                   $ {
                      quantity === 0
                        ?
                        <>0</>
                        :
                        total
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
