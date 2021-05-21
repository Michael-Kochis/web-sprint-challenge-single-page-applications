import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function PizzaButton() {
    let history = useHistory();

    function orderPizza() {
        history.push("/pizza")
    }

    return (
        <Button id='pizza-button' name="pizza-button" onClick={orderPizza}>
            Pizza?
        </Button>
    )
}

export {
    PizzaButton
}
