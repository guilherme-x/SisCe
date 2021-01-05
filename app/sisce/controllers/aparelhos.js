const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createProduct = async (req, res) => {
  const { marca, modelo,mac_wlan, mac_ether, sistema_operacional, processador, obs } = req.body;
  const { rows } = await db.query(
    "INSERT INTO aparelho (marca, modelo,mac_wlan, mac_ether, sistema_operacional, processador, obs) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [marca, modelo,mac_wlan, mac_ether, sistema_operacional, processador, obs]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      aparelho: { marca, modelo,mac_wlan, mac_ether, sistema_operacional, processador, obs }
    },
  });
};

exports.listAll = async (req, res) => {
  const response = await db.query('SELECT * FROM aparelho ORDER BY marca ASC');
  res.status(200).send(response.rows);

};