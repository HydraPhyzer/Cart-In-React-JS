import React, { useState } from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

function Footer(Props) {
  let [First , Second]=useState(1);
  let HandleClick=()=>
  {
    Second(First);
    Props.Ind(First);
  }
  return (
    <div className='Feet'>
      <div className='row text-center Foot container-fluid px-2'>
              <button className='col-4 btn btn-dark Footer-Comp bg-danger rounded-start' onClick={HandleClick}>Reset Now</button>
              <div className="col-4 bg-primary Footer-Comp bg-warning text-center">Total Bill :{Props.Ans}$</div>

                <Link to="ViewCart" className='col-4 btn btn-dark Footer-Comp rounded-end'>
                  View Cart
                </Link>

      </div>
    </div>
  )
}

export default Footer