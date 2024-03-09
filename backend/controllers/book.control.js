const Book = require("../models/book");

module.exports = {
  list: async (req, res) => {
    const data = await Book.findAndCountAll();
    res.status(200).send({ result: data });
  },
  create: async (req, res) => {
    const data = await Book.create(req.body);
    console.log(data);
    res.status(201).send({ error: false, result: data.dataValues });
  },
  edit: async (req, res) => {
    const data = await Book.update(req.body, { where: { id: req.params.id } });
    res.status(202).send({
      error: false,
      result: data,
    });
  },
  delete: async (req, res) => {
    const data = await Book.destroy({ where: { id: req.params.id } });
    res.status(204).send({
      error: false,
      result: data,
    });
  },
};
