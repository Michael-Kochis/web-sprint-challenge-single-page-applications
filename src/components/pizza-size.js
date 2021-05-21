import React from 'react'

function PizzaSize() {
    return (
        <div>
            <select id="size-dropdown">
                <option value="">Select Pizza Size</option>
                <option value="small">Small (12)</option>
                <option value="medium">Medium (14)</option>
                <option value="large">Large (16)</option>
            </select>
        </div>
    )
}

export {
    PizzaSize
}