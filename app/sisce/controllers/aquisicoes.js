const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createAcquisition = async (req, res) => {
  const { motivo, data_aquisicao, fk_usuario, fk_aparelho } = req.body;
  const { rows } = await db.query(
    "INSERT INTO aquisicao (motivo, data_aquisicao, fk_usuario, fk_aparelho) VALUES ($1, $2, $3, $4)",
    [motivo, data_aquisicao, fk_usuario, fk_aparelho]
  );

  res.status(201).send({
    message: "Acquisition added successfully!",
    body: {
      aquisicao: { motivo, data_aquisicao, fk_usuario, fk_aparelho }
    },
  });
};
exports.listAll = async (req, res) => {
    const response = await db.query('SELECT * FROM aquisicao ORDER BY data_aquisicao');
    res.status(200).send(response.rows);
  
  };