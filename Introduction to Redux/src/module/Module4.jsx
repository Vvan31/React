import React from 'react'
import { connect } from 'react-redux'

import { snackUpdate } from '../redux/actions'

function Module4({ snackData, handleQuantity }) {
    return (
        <div>
            {snackData.length > 0 && snackData.map((snack) => (
                <div key={snack.id}>
                    <p>{snack.food} - <b>{snack.quantity}</b></p>
                    <button onClick={() => handleQuantity("+", snack.id)}>+</button>
                    <button onClick={() => handleQuantity("-", snack.id)}>-</button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        snackData: state.snackData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleQuantity: (operator,id) => dispatch(snackUpdate(operator,id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Module4)

