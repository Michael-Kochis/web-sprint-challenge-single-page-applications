import React from 'react'
import { TopBar } from './nav/top-bar'
import '../App.css'
import { PizzaButton } from './nav/pizza-button'

function OrderPizza() {
    return (
        <div id="order-pizza">
            <TopBar></TopBar>
            <div id="pizza-section">
            <h2>Your favorite food, delivered while coding.</h2>
            <PizzaButton />
            </div>
        </div>
    )
}

export {
    OrderPizza
}
