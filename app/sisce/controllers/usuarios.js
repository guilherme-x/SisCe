const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createUser = async (req, res) => {
  const { nome, cpf, cargo, setor } = req.body;
  const { rows } = await db.query(
    "INSERT INTO usuario (nome, cpf, cargo, setor) VALUES ($1, $2, $3, $4)",
    [nome, cpf, cargo, setor]
  );

  res.status(201).send({
    message: "User added successfully!",
    body: {
      usuario: { nome, cpf, cargo, setor }
    },
  });
};
exports.listAll = async (req, res) => {
    const response = await db.query('SELECT * FROM usuario ORDER BY nome');
    res.status(200).send(response.rows);
  
  };