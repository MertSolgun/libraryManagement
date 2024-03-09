"use strict";

const router = require("express").Router();
const Controller = require("../controllers/book.control");

router.get("/books", Controller.list);

router.post("/addbook", Controller.create);

router.put("/:id", Controller.edit);

router.delete("/:id", Controller.delete);

module.exports = router;
