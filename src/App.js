import { useState } from 'react'
import './App.css'
import AddItems from './Components/AddItems'
import Alert from './Components/Alert'
import Footer from './Components/Footer'

function App()
{
    let [Ttl , SetTtl]=useState(0);
    let GetTotal=(Val)=>
    {
        SetTtl(Val)
    }
    return(
        <div>
            <Alert Heading={"Welcome to The Cart App , Happy Shpping!"} BG={"primary"}/>
            <AddItems Set={GetTotal}/>
            <Footer Ans={Ttl}/>
        </div>
    )
}

export default App