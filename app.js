require("dotenv").config();
const routes = require("./routes");
const express = require("express");
const app = express();
const PORT = 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
	console.log("This app runing on port: ", PORT);
});
