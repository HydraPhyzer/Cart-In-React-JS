import React from 'react'

function Alert(Props) {
    let CName=`alert alert-${Props.BG} rounded-0 mb-1 text-success m-2`;
    return (
        <div>
            <div className={CName} role="alert">
                {Props.Heading}
            </div>
        </div>
    )
}

export default Alert