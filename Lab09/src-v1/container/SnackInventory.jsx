import { useSelector, useDispatch } from 'react-redux'
import Snack from '../components/Snack'
// import { addSnackQty, removeSnackQty } from "../redux/actions/snackActions"
import { addSnackQty, removeSnackQty} from '../redux/reducers/snackReducer'

const SnackInventory = () => {
    const dispatch = useDispatch()
    const snacksData = useSelector((state) => state.snacksData)

    const handleQuantity = (operator, id) => {
        if (operator === "+") {
            dispatch(addSnackQty(id))
        } else {
            dispatch(removeSnackQty(id))
        }
    }

    return (
        <>
            <h1>Snack Department</h1>
            <div className="row my-5">
                <div className="card-group">
                    {snacksData.length > 0 && snacksData.map((snack) => (
                        <Snack
                            key={snack.id}
                            snack={snack}
                            handleQuantity={handleQuantity}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SnackInventory

