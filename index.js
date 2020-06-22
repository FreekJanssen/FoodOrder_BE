const express = require("express");
const cors = require("cors");

const menuRouter = require('./routers/menu');
const orderRouter = require('./routers/order');
const authRouter = require("./routers/auth");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/menu', menuRouter);
app.use('/order', orderRouter);
app.use("/", authRouter);

app.listen(port, () => {
	console.log(`Listening on: ${port}`);
});

app.get("/", (req, res) => {
	res.send("Hello world");
});