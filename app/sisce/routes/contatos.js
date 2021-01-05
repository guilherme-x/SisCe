const router = require('express-promise-router')();
const contatos = require('../controllers/contatos.js')
// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Usuário': (POST): localhost:3000/sisce/usuarios
router.post('/contatos', contatos.createContact);
router.get('/contatos', contatos.listAll);
module.exports = router;