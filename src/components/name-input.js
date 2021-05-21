import React from 'react'

function NameInput(props) {
    return (
        <div>
          <div id="name-error" className="red">{props.error}</div>
          <label>Name
            <input id="name-input" name="nameInput" type="text" onChange={props.onChange} value={props.value}/>
          </label>    
        </div>
    )
}

export {
    NameInput
}
