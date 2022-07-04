import './App.css'
import AddItems from './Components/AddItems'
import Alert from './Components/Alert/Alert'

function App()
{
    return(
        <div>
            <Alert Heading={"Welcome to The Cart App , Happy Shpping!"} BG={"primary"}/>
            <AddItems />
        </div>
    )
}

export default App