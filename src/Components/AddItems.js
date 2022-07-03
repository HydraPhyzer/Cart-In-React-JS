import { useState } from 'react'
import './AddItems.css'
import Alert from './Alert'
import DisplayItems from './DisplayItems'

let Obj =
    [
        {
            PName: "Surf Excel",
            PPrice: 100,
            PQuantity: 0,
        },
        {
            PName: "Surf Excel",
            PPrice: 100,
            PQuantity: 0,
        }
    ]
    function AddItems() {
    let [ItemList, setItemList] = useState(Obj);

    let Increment = (Index) => {
        let NewItemsList = [...Obj];
        NewItemsList[Index].PQuantity += 1;
        setItemList(NewItemsList);
    }
    let Deccrement = (Index) => {
        let NewItemsList = [...Obj];
        if (NewItemsList[Index].PQuantity > 0) {
            NewItemsList[Index].PQuantity -= 1;
            setItemList(NewItemsList);
        }
        else {
            setItemList(NewItemsList);
        }
    }
    return (
        <div>
            <Alert />
            <DisplayItems Display={ItemList} Inc={Increment} Dec={Deccrement} />
        </div>
    )
}
export default AddItems