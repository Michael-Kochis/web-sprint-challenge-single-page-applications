import React, { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { NameInput } from './name-input'
import { schema } from './schema/schema'
import { OrderBar } from './order-bar'
import { TopBar } from './nav/top-bar'
import { PizzaSauce } from './pizza-sauce'
import { PizzaSize } from './pizza-size'
import { PizzaTopping } from './pizza-topping'
import { SpecialInstructions } from './special-instructions'

function PizzaForm() {
    const initialValues = {
        nameInput: "",
        pizzaSauce: "original",
        pizzaSize: "",
        artichoke: false,
        blackOlive: false,
        canadian: false,
        chicken: false,
        extraCheese: false,
        garlic: false,
        greenPepper: false,
        italian: false,
        onion: false,
        pepperoni: false,
        pineapple: false,
        sausage: false,
        threeCheese: false,
        tomato: false,
        specialInstructions: ""
    }

    const [disabled, setDisabled] = useState(true);
    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, type, value, checked} = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        validateForm(name, updateData); 
    }

    const submit = () => {
        console.log(form);
        axios.put('https://reqres.in/api/orders',form)
            .then(res => console.log(res.data))
            .catch(err => alert(err));
    }

    const validateForm = (name, value) => {
        schema.isValid(form)
            .then(valid => {
                setDisabled(!valid);
            });

            yup.reach(schema, name).validate(value)
            .then(() => {
                setErrors({...errors, [name]: ''});
            }).catch((err) => {
                if (err.errors) { 
                    setErrors({...errors, [name]: err.errors[0]});
                }
            });
    }

    return (
        <div>
            <TopBar></TopBar>
            <NameInput onChange={handleChange} value={form.nameInput} error={errors.nameInput} />
            <PizzaSize onChange={handleChange} value={form.pizzaSize} error={errors.pizzaSize}></PizzaSize>
            <PizzaSauce onChange={handleChange} value={form.pizzaSauce} error={errors.pizzaSauce}></PizzaSauce>
            <PizzaTopping onChange={handleChange} form={form} ></PizzaTopping>
            <SpecialInstructions onChange={handleChange} value={form.specialInstructions}></SpecialInstructions>
            <OrderBar disabled={disabled} submit={submit}></OrderBar>
        </div>
    )
}

export {
    PizzaForm
}
