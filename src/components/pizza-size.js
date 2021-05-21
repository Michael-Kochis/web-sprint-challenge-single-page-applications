import React from 'react'

function PizzaSize(props) {
    const { error, onChange, value } = props;
    return (
        <div>
            <div id="size-header" >
                <h4 className="left">Choice of Size</h4>
                <p className="left">required</p>
            </div>
            <div id="size-error" className="red" >{error}</div>
            <select id="size-dropdown" name="pizzaSize" onChange={onChange} value={value}>
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