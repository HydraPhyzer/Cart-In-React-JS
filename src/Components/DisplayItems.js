import React from 'react'
import ButtonGroup from './Buttons (+ , -)/ButtonGroup'
import './DisplayItem.css'


function DisplayItems(Props) {
    return (
        <div>
            {
                Props.Display.map((Items , In) => {
                    return (
                        <div className="row m-2 mt-3 bg-success p-3 rounded-1 text-white d-flex align-items-center justify-content-center pl-0 Show" key={In}>
                            <div className="col-sm-3 col-4 my-sm-0 my-3">
                                {Items.PName}
                            </div>
                            <div className="col-sm-2 col-4 my-sm-0 my-3 text-center">
                                {Items.PPrice}
                            </div>
                            <div className="col-sm-2 col-4 my-sm-0 my-3 text-center">
                                {Items.PQuantity*Items.PPrice}
                            </div>
                            <div className="col-sm-2 col-6 my-sm-0 my-3">
                                <ButtonGroup Quan={Items.PQuantity} Add={Props.Inc} Sub={Props.Dec} Ind={In}/>
                            </div>
                            <div className="col-sm-3 col-6 my-sm-0 my-3">
                                <button className='btn btn-info' onClick={()=>{Props.Rem(In)}}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayItems