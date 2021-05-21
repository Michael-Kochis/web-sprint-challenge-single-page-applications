import React from 'react'
import { OrderButton } from './order-button'
import { OrderNumberer } from './order-numberer'

function OrderBar(props) {
    const { disabled, submit } = props;

    return (
        <div id="order-bar">
            <OrderNumberer></OrderNumberer>
            <OrderButton disabled={disabled} submit={submit}></OrderButton>
        </div>
    )
}

export {
    OrderBar
}
