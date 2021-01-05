const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createContact = async (req, res) => {
  const { fone, celular, email, fk_usuario } = req.body;
  const { rows } = await db.query(
    "INSERT INTO contato (fone, celular, email, fk_usuario) VALUES ($1, $2, $3, $4)",
    [fone, celular, email, fk_usuario]
  );

  res.status(201).send({
    message: "Contact added successfully!",
    body: {
      contato: { fone, celular, email, fk_usuario }
    },
  });
};

exports.listAll = async (req, res) => {
    const response = await db.query('SELECT * from colaboradores');
    res.status(200).send(response.rows);
  
  };