import React from 'react'

function PizzaTopping(props) {
    const { onChange, form } = props;
    const { artichoke, blackOlive, canadian, chicken, extraCheese, garlic, greenPepper, italian, onion, pepperoni, pineapple, sausage, threeCheese, tomato } = form;

return (
        <div>
            <div id="topping-header" >
                <h4 className="left">Select Toppings</h4>
                <p className="left">Choose as many as you want!</p>
            </div>
            <div id="toppings-box">
                <label htmlFor="topping-pepperoni" className="w-40 topping">
                    <input type="checkbox" id="topping-pepperoni" name="pepperoni"  checked={pepperoni} onChange={onChange} />Pepperoni
                </label>
                <label htmlFor="topping-tomato" className="w-40 topping">
                    <input type="checkbox" id="topping-tomato" name="tomato"  checked={tomato} onChange={onChange} />Diced Tomatoes
                </label>
                <label htmlFor="topping-sausage" className="w-40 topping">
                    <input type="checkbox" id="topping-canadian" name="sausage"  checked={sausage} onChange={onChange} />Sausage
                </label>
                <label htmlFor="topping-blackOlive" className="w-40 topping">
                    <input type="checkbox" id="topping-blackOlive" name="blackOlive"  checked={blackOlive} onChange={onChange} />Black Olives
                </label>
                <label htmlFor="topping-canadian" className="w-40 topping">
                    <input type="checkbox" id="topping-canadian" name="canadian"  checked={canadian} onChange={onChange} />Canadian Bacon
                </label>
                <label htmlFor="topping-garlic" className="w-40 topping">
                    <input type="checkbox" id="topping-garlic" name="garlic"  checked={garlic} onChange={onChange} />Roasted Garlic
                </label>
                <label htmlFor="topping-italian" className="w-40 topping">
                    <input type="checkbox" id="topping-canadian" name="italian"  checked={italian} onChange={onChange} />Spicy Italian Sausage
                </label>
                <label htmlFor="topping-artichoke" className="w-40 topping">
                    <input type="checkbox" id="topping-artichoke" name="artichoke"  checked={artichoke} onChange={onChange} />Artichoke Hearts
                </label>
                <label htmlFor="topping-chicken" className="w-40 topping">
                    <input type="checkbox" id="topping-chicken" name="chicken"  checked={chicken} onChange={onChange} />Grilled Chicken
                </label>
                <label htmlFor="topping-threeCheese" className="w-40 topping">
                    <input type="checkbox" id="topping-threeCheese" name="threeCheese"  checked={threeCheese} onChange={onChange} />Three Cheese
                </label>
                <label htmlFor="topping-onion" className="w-40 topping">
                    <input type="checkbox" id="topping-onion" name="onion"  checked={onion} onChange={onChange} />Onions
                </label>
                <label htmlFor="topping-pineapple" className="w-40 topping">
                    <input type="checkbox" id="topping-pineapple" name="pineapple"  checked={pineapple} onChange={onChange} />Pineapple
                </label>
                <label htmlFor="topping-greenPepper" className="w-40 topping">
                    <input type="checkbox" id="topping-greenPepper" name="greenPepper"  checked={greenPepper} onChange={onChange} />Green Pepper
                </label>
                <label htmlFor="topping-extraCheese" className="w-40 topping">
                    <input type="checkbox" id="topping-extraCheese" name="extraCheese"  checked={extraCheese} onChange={onChange} />Extra Cheese
                </label>
            </div>            
        </div>
    )
}

export {
    PizzaTopping
}