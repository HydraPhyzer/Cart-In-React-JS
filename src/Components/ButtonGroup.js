import React from 'react'

function ButtonGroup(Props) {
    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger">-</button>
                <button type="button" className="btn btn-warning">{Props.Quan}</button>
                <button type="button" className="btn btn-dark">+</button>
            </div>
        </div>
    )
}

export default ButtonGroup