require("dotenv").config();
const express = require("express");
const app = express();
const weatherRouter = require("./weather/index");
const bookRouter = require("./routers/book");

app.use(express.json());
app.use(weatherRouter);
app.use(bookRouter);

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// test
app.get("/", (req, res) => {
  res.send("Hello World");
});
