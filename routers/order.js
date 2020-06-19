const { Router } = require("express");
const { mealTopping, mealComposition, order } = require("../models");

const router = new Router();

router.post('/', async (req,res,next) => {
  
  const { customerAddress, customerPhone, mealCompositions, totalPrice, comment } = req.body.order;

  if (!customerPhone || !mealCompositions.length > 0) {
    res.status(400).send({ message: 'Order not complete' });
  }
	try{
    
    const newOrder = await order.create({
      customerAddress,
      customerPhone,
      totalPrice,
      comment
    });
    const { id: orderId } = newOrder;

    mealCompositions.forEach(async (meal) => {
      const { meal: mealId, filling: fillingId, salsa: salsaId, toppings } = meal;
      const newMealComposition = await mealComposition.create({
        orderId,
        mealId,
        fillingId,
        salsaId
      });
/*       const { id: mealCompositionId } = newMealComposition;
      toppings.forEach(async (topping) => {
        const newMealTopping = await mealTopping.create({
          toppingId: topping,
          mealCompositionId
        });
        console.log(newMealTopping);
      }); */
    });

	}catch(e){
		res.send(e);
	};
});

module.exports = router;