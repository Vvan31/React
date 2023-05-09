import { useSelector, useDispatch } from 'react-redux'
// import Snack from '../components/Snack'
import Drink from '../components/Drink'
// import { addDrinkQty, removeDrinkQty } from "../redux/actions/drinkAction";
// import { addDrinkQty, removeDrinkQty } from '../redux/reducers/drinkReducer'
import { addDrinkQty, removeDrinkQty } from '../redux/slice/drinkSlice'

const DrinkInventory = () => {
    const dispatch = useDispatch()
    const drinksData = useSelector((state) => state.drinksData)

    const handleQuantity = (operator, id) => {
        if (operator === "+") {
            dispatch(addDrinkQty(id))
        } else {
            dispatch(removeDrinkQty(id))
        }
    }

    return (
        <>
            <h1>Drink Department</h1>
            <div className="row my-5">
                <div className="card-group">
                    {drinksData.length > 0 && drinksData.map((drink) => (
                        <Drink
                            key={drink.id}
                            drink={drink}
                            handleQuantity={handleQuantity}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default DrinkInventory

