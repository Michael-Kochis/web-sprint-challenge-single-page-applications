import React from 'react'

function PizzaSauce(props) {
    const { error, onChange, value } = props;
    return (
        <div>
            <div id="sauce-header" >
                <h4 className="left">Pizza Sauce</h4>
                <p className="left">required</p>
            </div>
            <div id="sauce-error" className="red" >{error}</div>
            <div id="sauce-radio-box">
            <label htmlFor="sauce-original">Original Red
                <input type="radio" id="sauce-original" name="pizzaSauce" value="original" checked={value === "original"} onChange={onChange} />
            </label>
            <label htmlFor="sauce-garlic">Garlic Ranch
                <input type="radio" id="sauce-garlic" name="pizzaSauce" value="garlic" checked={value === "garlic"} onChange={onChange} />
            </label>
            <label htmlFor="sauce-bbq">BBQ Sauce
                <input type="radio" id="sauce-bbq" name="pizzaSauce" value="bbq" checked={value === "bbq"} onChange={onChange} />
            </label>
            <label htmlFor="sauce-spinach">Spinach Alfredo
                <input type="radio" id="sauce-spinach" name="pizzaSauce" value="spinach" checked={value === "spinach"} onChange={onChange} />
            </label>
             </div>
        </div>
    )
}

export {
    PizzaSauce
}