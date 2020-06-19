const { Router } = require("express");
const { meal, filling, topping, salsa } = require("../models");

const router = new Router();

router.post('/', async (req,res,next) => {

	try{
    console.log(req.body)
	}catch(e){
		res.send(e);
	};
});

module.exports = router;