import React, { useState } from 'react'
import { NameInput } from './name-input'

function PizzaForm() {
    const initialValues = {
        name: "",
    }

    const [form, setForm] = useState(initialValues);

    const handleChange = (event) => {
        const {name, type, value, checked} = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        console.log(form); 
    }

    return (
        <div>
            <NameInput onChange={handleChange} value={form.name} />
        </div>
    )
}

export {
    PizzaForm
}
