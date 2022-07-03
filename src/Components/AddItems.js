import { useState } from 'react'
import './AddItems.css'
import Alert from './Alert'
import DisplayItems from './DisplayItems'
import Form from './Form'

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
function AddItems() {
    let [ItemList, setItemList] = useState(Obj);

    let Increment = (Index) => {
        let NewItemsList = [...ItemList];
        NewItemsList[Index].PQuantity += 1;
        setItemList(NewItemsList);
    }
    let Deccrement = (Index) => {
        let NewItemsList = [...ItemList];
        if (NewItemsList[Index].PQuantity >0) {
            NewItemsList[Index].PQuantity -= 1;
            setItemList(NewItemsList);
        }
    }
    let Remove = (Index) => {
        let NewItemsList = [...ItemList];
        NewItemsList.splice(Index, 1);
        setItemList(NewItemsList);
    }
    return (
        <div>
            <Alert Heading={"Welcome to The Cart App , Happy Shpping!"} BG={"primary"}/>
            
            <Form />

            {ItemList.length>0? <DisplayItems Display={ItemList} Inc={Increment} Dec={Deccrement} Rem={Remove} />:<Alert Heading={"Your Cart is Empty!"} BG={"danger"}/>}
        </div>
    )
}
export default AddItems