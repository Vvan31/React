import { useSelector, useDispatch } from 'react-redux'
import Snack from '../components/Snack'
import { snackUpdate } from '../redux/actions'

const SnackInventory = () => {
    const dispatch = useDispatch()
    const snackData = useSelector((state) => state.snackData)

    const handleQuantity = (operator, id) => {
        dispatch(snackUpdate(operator, id))
    }

    return (
        <>
            <h1>Snack Department</h1>
            <div className="row">
                <div className="card-group">
                    {snackData.length > 0 && snackData.map((snack) => (
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

