import React from 'react'

function Form() {
    let FormHandle=(Event)=>
    {
        Event.preventDefault();
    }
    return (
        <div>
            <form className='row m-2 mt-3 d-flex justify-content-between' onSubmit={(E)=>{FormHandle(E)}}>
                <div className=" col-4">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Product Name'/>
                </div>
                <div className=" col-4">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Product Price'/>
                </div>
                <div className=" col-4 justify-self-end">
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Form