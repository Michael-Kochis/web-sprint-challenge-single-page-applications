import React from 'react'

function SpecialInstructions(props) {
    const {onChange, value } = props;
    return (
        <div>
            <div id="special-instructions" >
                <h4 className="left">Special Instructions</h4>
            </div>
            <input id="instructions" name="specialInstructions" type="textarea" onChange={onChange} value={value} placeholder="Anything else you'd like to add?" />
        </div>
    )
}

export {
    SpecialInstructions
}