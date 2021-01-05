const router = require('express-promise-router')();
const productController = require('../controllers/aparelhos.js')
// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/aparelhos', productController.createProduct);

module.exports = router;