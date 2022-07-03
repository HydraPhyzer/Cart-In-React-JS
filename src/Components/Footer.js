import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='row m-2 text-center Foot'>
            <button className='col-4 btn btn-dark Footer-Comp '>Reset Now</button>
            <div className="col-4 bg-primary Footer-Comp">Total Bill :400$</div>
            <button className='col-4 btn btn-dark Footer-Comp'>View Cart</button>
    </div>
  )
}

export default Footer