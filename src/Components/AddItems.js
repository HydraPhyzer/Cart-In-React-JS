import { useState, useEffect } from 'react'
import Alert from './Alert/Alert'
import DisplayItems from './DisplayItems'
import Form from './Form/Form'
import Footer from './Footer/Footer'
import ViewCart from './ViewCart'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

let Obj =
    [
        {
            PName: "Surf Excel",
            PPrice: 100,
            PQuantity: 0,
        },
        {
            PName: "Surf Bronze",
            PPrice: 100,
            PQuantity: 0,
        }
    ]
function AddItems(Props) {
    let [ItemList, setItemList] = useState(Obj);
    let [Total, SetTotal] = useState(0);

    useEffect(() => {
        let CalcTotal = () => {
            let Val = 0;
            ItemList.forEach((Elem) => {
                Val += (Elem.PQuantity * Elem.PPrice);
            })
            SetTotal(Val);
        }

        CalcTotal();
    }, [ItemList, Props, Total]);


    let Increment = (Index) => {
        let NewItemsList = [...ItemList];
        NewItemsList[Index].PQuantity += 1;


        setItemList(NewItemsList);
    }
    let Deccrement = (Index) => {
        let NewItemsList = [...ItemList];
        if (NewItemsList[Index].PQuantity > 0) {
            NewItemsList[Index].PQuantity -= 1;
            setItemList(NewItemsList);
        }
    }
    let Remove = (Index) => {
        let NewItemsList = [...ItemList];
        NewItemsList.splice(Index, 1);
        setItemList(NewItemsList);
    }
    let GetFormData = (Na, Pri) => {
        let Ob =
        {
            PName: Na,
            PPrice: Pri,
            PQuantity: 0,
        }
        let NewOb = [Ob, ...ItemList];
        setItemList(NewOb);
    }
    let RemoveAll = (Val) => {
        if (Val === 1) {
            let NewSt = [...ItemList];
            NewSt.forEach((Elem) => {
                Elem.PQuantity = 0;
            });
            setItemList(NewSt);
        }
    }
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Alert Heading={"Welcome to The Cart App , Happy Shpping!"} BG={"primary"} />

                            <Form Inp={GetFormData} />

                            {ItemList.length > 0 ? <DisplayItems Display={ItemList} Inc={Increment} Dec={Deccrement} Rem={Remove} /> : <Alert Heading={"Your Cart is Empty!"} BG={"danger"} />}

                            <Footer Ans={Total} Ind={RemoveAll} />

                        </div>
                    }></Route>
                    <Route path="ViewCart" element={<ViewCart Display={ItemList} Rem={Remove}/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default AddItems