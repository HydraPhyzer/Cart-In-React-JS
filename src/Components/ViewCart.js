import React from 'react'
import {FaCartPlus} from 'react-icons/fa'

function ViewCart(Props) {
  return (
    <div>
      <div>
        {
          Props.Display.map((Items, In) => {
            return (
              <div className="row m-2 mt-3 bg-success p-3 rounded-1 text-white d-flex align-items-center" key={In}>
                <div className="col-3">
                  {Items.PName}
                </div>
                <div className="col-2">
                  {Items.PPrice}
                </div>
                <div className="col-3">
                  {Items.PQuantity * Items.PPrice}
                </div>
                <div className="col-2">
                  <button className='btn btn-info' onClick={() => { Props.Rem(In) }}>Remove</button>
                </div>
              </div>
            )
          })
        }
        <div className="row m-2">
          <button className='btn btn-warning  text-white d-flex align-items-center justify-content-center'>Proceed To Checkout <FaCartPlus className='text-dark mx-2'/> </button>
        </div>
      </div>
    </div>
  )
}

export default ViewCart