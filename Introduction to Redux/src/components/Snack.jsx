import React from 'react'

const Snack = ({ snack, handleQuantity }) => {
    return (
        <div className='card'>
            <div className="card-header">{snack.food}</div>
            <div className="card-body fw-bold px-5">Quantity : {snack.quantity}</div>
            <div className="card-footer">
                <button
                    className='btn btn-info m-1'
                    onClick={() => handleQuantity("+", snack.id)}>
                    +
                </button>
                <button
                    className='btn btn-success m-1'
                    onClick={() => handleQuantity("-", snack.id)}>
                    -
                </button>
            </div>
        </div>
    )
}

export default Snack