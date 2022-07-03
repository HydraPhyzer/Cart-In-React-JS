import React from 'react'
import './DisplayItems.css'
import ButtonGroup from './ButtonGroup'

function DisplayItems(Props) {
    return (
        <div>
            {
                Props.Display.map((Items , In) => {
                    return (
                        <div className="row m-2 mt-3 bg-success p-3 rounded-1 text-white d-flex align-items-center" key={In}>
                            <div className="col-3">
                                {Items.PName}
                            </div>
                            <div className="col-2">
                                {Items.PPrice}
                            </div>
                            <div className="col-3">
                                {Items.PPrice}
                            </div>
                            <div className="col-2">
                                <ButtonGroup Quan={Items.PQuantity} Add={Props.Inc} Sub={Props.Dec} Ind={In}/>
                            </div>
                            <div className="col-2">
                                <button className='btn btn-info'>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayItems