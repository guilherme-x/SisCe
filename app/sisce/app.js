const express = require('express');
const cors = require('cors');
const sess = require('express-session')
const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const login = require('./routes/checkUser');
const productRoute = require('./routes/aparelhos');
const userRoute = require('./routes/usuarios');
const contactRoute = require('./routes/contatos');
const acquisitionRoute = require('./routes/aquisicoes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/sisce',login);
app.use('/sisce', productRoute);
app.use('/sisce', userRoute);
app.use('/sisce', contactRoute);
app.use('/sisce', acquisitionRoute);

var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

module.exports = app;
