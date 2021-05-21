import * as yup from 'yup'

const schema = yup.object().shape({
    nameInput: yup
        .string()
        .min(2, 'name must be at least 2 characters'),
    pizzaSauce: yup
        .string()
        .oneOf(["original", "garlic", "bbq", "spinach"], 'must select a sauce'),
    pizzaSize: yup
        .string()
        .oneOf(["small", "medium", "large"], 'Must select a pizza size'),
    artichoke: yup.boolean(),
    blackOlive: yup.boolean(),
    canadian: yup.boolean(),
    chicken: yup.boolean(),
    extraCheese: yup.boolean(),
    garlic: yup.boolean(),
    greenPepper: yup.boolean(),
    italian: yup.boolean(),
    onion: yup.boolean(),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    threeCheese: yup.boolean(),
    tomato: yup.boolean(),
    specialInstructions: yup.string()
});

export {
    schema
}