const router = require('express-promise-router')();
const usuarios = require('../controllers/usuarios.js')
// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Usuário': (POST): localhost:3000/sisce/usuarios
router.post('/usuarios', usuarios.createUser);
router.get('/usuarios', usuarios.listAll);
module.exports = router;