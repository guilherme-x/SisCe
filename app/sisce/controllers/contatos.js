const db = require("../config/database");
const user = require("./usuarios");
// ==> Método responsável por criar um novo 'Product':
var cpf = user.createUser.cpf



exports.createContact = async (req, res) => {
  const { fone, celular, email} = req.body;
  const { rows } = await db.query(
    "update contato set (fone, celular, email) = ($1, $2, $3) from usuario where contato.fk_usuario = usuario.idusuario",
    [fone, celular, email]
  );

  res.status(201).send({
    message: "Contact added successfully!",
    body: {
      contato: { fone, celular, email}
    },
  });
};

exports.listAll = async (req, res) => {
    const response = await db.query('SELECT * from colaboradores');
    res.status(200).send(response.rows);
  
  };

  exports.Delete =async (req,res) => {
    const {id} = req.body;
    const response = await db.query(
      "delete from contato where idcontato = $1",
      [id]
    );

    res.status(201).send({
      message: "Contact deleted successfully!",
      body: {
        contato: {id}
      },
    });
  };