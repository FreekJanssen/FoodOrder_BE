const { Router } = require("express");
const { mealTopping, mealComposition, order, topping, salsa, meal, filling } = require("../models");

const router = new Router();
let clients = [];

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

    await Promise.all(mealCompositions.map(async (meal) => {
      const { meal: mealId, filling: fillingId, salsa: salsaId, toppings } = meal;
      const newMealComposition = await mealComposition.create({
        orderId,
        mealId,
        fillingId,
        salsaId
      });      
      const { id: mealCompositionId } = newMealComposition;
      await Promise.all(toppings.map(async (topping) => {
        const newMealTopping = await mealTopping.create({
          toppingId: topping,
          mealCompositionId
        });
        return newMealTopping;
      }));
      return newMealComposition;
    }));
    const fullNewOrder = await order.findByPk(orderId, { include: { model: mealComposition, include: [meal,filling,salsa, topping] } });
    const orderArray = [fullNewOrder];
    const data = `data: ${JSON.stringify(orderArray)}\n\n`;
    clients.forEach(c => c.res.write(data));
    res.send({message: 'success'});
	}catch(e){
		res.send(e);
	};
});

router.get('/', async (req, res, next) => {
   
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  res.set(headers);
  const uncompletedOrders = await order.findAll({ where: { completed: false }, include: { model: mealComposition, include: [meal,filling,salsa,topping] } });
  const data = `data: ${JSON.stringify(uncompletedOrders)}\n\n`
  res.write(data);
  const keepAlive = 60 * 1000;
  setInterval(() => res.write(':\n\n'), keepAlive);
    // Generate an id based on timestamp and save res
    // object of client connection on clients list
    // Later we'll iterate it and send updates to each client
  const clientId = Date.now();
  const newClient = {
    id: clientId,
    res
  };
  clients.push(newClient);
    // When client closes connection we update the clients list
    // avoiding the disconnected one
  req.on('close', () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter(c => c.id !== clientId);
  });
});

router.patch('/:id/done', async(req, res) => {
  const { id } = req.params;
  
  try{
    const orderToUpdate = await order.findByPk(id);
    await orderToUpdate.update({ completed: true });
    res.send({message: 'Success'});
  }catch(e){
    res.send(e);
  };
});

module.exports = router;