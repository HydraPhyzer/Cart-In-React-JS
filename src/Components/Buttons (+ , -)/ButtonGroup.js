import React from 'react'

function ButtonGroup(Props) {
    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" onClick={()=>{Props.Sub(Props.Ind)}}>-</button>
                <button type="button" className="btn btn-warning">{Props.Quan}</button>
                <button type="button" className="btn btn-dark" onClick={()=>{Props.Add(Props.Ind)}}>+</button>
            </div>
        </div>
    )
}

export default ButtonGroup