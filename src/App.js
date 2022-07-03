import './App.css'
import AddItems from './Components/AddItems'
import Alert from './Components/Alert'
import Footer from './Components/Footer'

function App()
{
    return(
        <div>
            <Alert Heading={"Welcome to The Cart App , Happy Shpping!"} BG={"primary"}/>
            <AddItems/>
            <Footer/>
        </div>
    )
}

export default App