import './AddItems.css'
import Alert from './Alert'
import DisplayItems from './DisplayItems'

let Obj=
[
    {
        PName:"Surf Excel",
        PPrice:100,
        PQuantity:0,
    },
    {
        PName:"Surf Excel",
        PPrice:100,
        PQuantity:0,
    }
]
function AddItems() {
    return (
        <div>
            <Alert/>
            <DisplayItems Display={Obj}/>
        </div>
    )
}
export default AddItems