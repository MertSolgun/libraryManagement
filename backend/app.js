const express = require("express");
require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const db = require("./db");
const Book = require("./models/book");

///Router///
app.use(require("./routes/books"));

app.use(require("./errorHandle"));
const PORT = 8002 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server runned ${PORT}`);
});
