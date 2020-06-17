const { order, mealComposition, meal, filling, salsa } = require('./models');

async function get () {
    const order2 = await order.findByPk(2, {include: { model: mealComposition, include: [meal,filling,salsa]} })
    console.log(order2.get({plain:true}))
    
}
get();