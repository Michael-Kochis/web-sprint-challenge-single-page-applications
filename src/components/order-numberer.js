import React from 'react'

function OrderNumberer(props) {
    return (
        <span id="order-numberer">
            <span id="number-box">
                <span id="number-field">1</span>
                <span id="number-buttons">
                    <button>+</button>
                    <button>-</button>
                </span>
            </span>
        </span>
    )
}

export {
    OrderNumberer
}