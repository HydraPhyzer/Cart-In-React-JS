import React, { useState } from 'react'
import './Footer.css'

function Footer(Props) {
  let [First , Second]=useState(1);
  let HandleClick=()=>
  {
    Second(First);
    Props.Ind(First);
  }
  return (
    <div className='Feet'>
      <div className='row text-center Foot container-fluid px-2 rounded-1'>
              <button className='col-4 btn btn-dark Footer-Comp bg-danger' onClick={HandleClick}>Reset Now</button>
              <div className="col-4 bg-primary Footer-Comp bg-warning">Total Bill :{Props.Ans}$</div>
              <button className='col-4 btn btn-dark Footer-Comp'>View Cart</button>
      </div>
    </div>
  )
}

export default Footer