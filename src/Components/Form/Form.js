import React, { useState } from 'react'
import './Form.css'

function Form(Props) {
    let [Name , setName]=useState("");
    let [Price , setPrice]=useState("");
    let FormHandle=(Event)=>
    {
        Event.preventDefault();
        Name!=='' && Price!==''?Props.Inp(Name , Price):alert("Input Field Required")
    }
    let HandleName=(Val)=>
    {
        setName(Val.target.value);
    }
    let HandlePrice=(Val)=>
    {
        setPrice(Val.target.value);

    }
    return (
        <div>
            <form className='row m-2 mt-3 d-flex justify-content-between' onSubmit={(E)=>{FormHandle(E)}}>
                <div className=" col-4">
                    <input type="text" value={Name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Product Name' onChange={(E)=>{HandleName(E)}}/>
                </div>
                <div className=" col-4">
                    <input type="number" value={Price} className="form-control" id="exampleInputPassword1" placeholder='Enter Product Price' onChange={(E)=>{HandlePrice(E)}}/>
                </div>
                <div className=" col-4 justify-self-end">
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Form