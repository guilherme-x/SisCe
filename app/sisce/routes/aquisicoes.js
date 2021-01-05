const router = require('express-promise-router')();
const acquisitionController = require('../controllers/aquisicoes.js')
// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/aquisicoes', acquisitionController.createAcquisition);
router.get('/aquisicoes', acquisitionController.listAll);
module.exports = router;