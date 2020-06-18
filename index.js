const express = require("express");
const cors = require("cors");

const menuRouter = require('./routers/menu');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/menu', menuRouter);

app.listen(port, () => {
	console.log(`Listening on: ${port}`);
});

app.get("/", (req, res) => {
	res.send("Hello world");
});