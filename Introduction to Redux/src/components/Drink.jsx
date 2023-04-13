import React from 'react'

const Drink = ({ drink, handleQuantity }) => {
    return (
        <div className='card'>
            <div className="card-header">{drink.drink}</div>
            <div className="card-body fw-bold px-5">Quantity : {drink.quantity}</div>
            <div className="card-footer">
                <button
                    className='btn btn-info m-1'
                    onClick={() => handleQuantity("+", drink.id)}>
                    +
                </button>
                <button
                    className='btn btn-success m-1'
                    onClick={() => handleQuantity("-", drink.id)}>
                    -
                </button>
            </div>
        </div>
    )
}

export default Drink