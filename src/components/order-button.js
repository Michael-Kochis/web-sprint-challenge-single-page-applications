import React from 'react'

function OrderButton(props) {
    const { disabled, submit } = props;

    return (
    <button id="order-button" disabled={disabled} onClick={submit}>
        <span>Add to Order</span>
        <span>$17.99</span>
    </button>
        
    )
}

export {
    OrderButton
}
