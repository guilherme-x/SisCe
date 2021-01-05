const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createProduct = async (req, res) => {
  const { marca, modelo, obs } = req.body;
  const { rows } = await db.query(
    "INSERT INTO aparelho (marca, modelo, obs) VALUES ($1, $2, $3)",
    [marca, modelo, obs]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { marca, modelo, obs }
    },
  });
};