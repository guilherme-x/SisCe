const router = require('express-promise-router')();
const login = require('../controllers/login.js')
// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Usuário': (POST): localhost:3000/sisce/usuarios
router.post('/login', login.login);
module.exports = router;