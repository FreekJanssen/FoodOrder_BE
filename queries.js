const { order, mealComposition, meal, filling, salsa, topping } = require('./models');

async function get () {
    const order2 = await order.findByPk(2, {include: { model: mealComposition, include: [meal,filling,salsa]} })
    console.log(order2.get({plain:true}))
    
}
//get();
async function getMealAndToppings () {
    const mealcomp1 = await mealComposition.findByPk(6, {include: [meal, filling, topping, salsa] })
    console.log(mealcomp1.get({plain:true}))
    
}
getMealAndToppings();