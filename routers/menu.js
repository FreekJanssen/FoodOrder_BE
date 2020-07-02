const { Router } = require("express");
const { meal, filling, topping, salsa } = require("../models");

const router = new Router();

router.get('/', async (req,res,next) => {

	try{
		const meals = await meal.findAll();
		const fillings = await filling.findAll();
		const toppings = await topping.findAll();
		const salsas = await salsa.findAll();
		const menu = { meals, fillings, toppings, salsas };
		res.send(menu);
		
	}catch(e){
		res.send(e);
	};
});

module.exports = router;