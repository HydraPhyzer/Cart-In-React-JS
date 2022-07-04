import './App.css'
import AddItems from './Components/AddItems'
import Alert from './Components/Alert/Alert'
import ViewCart from './Components/ViewCart';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { render } from '@testing-library/react';

function App()
{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Alert Heading={"Welcome to The Cart App , Happy Shpping!"} BG={"primary"}/>
                            <AddItems/>
                        </div>
                    }></Route>
                    <Route path="ViewCart" element={<ViewCart/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App