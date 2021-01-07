const session = require("express-session");
const { startSession } = require("mongoose");
const db = require("../config/database");
const user = require("./usuarios");

exports.login = async (req, res) => {
    const {login, senha} = req.body;
    const responseLogin = await db.query('SELECT * from usuario where login = $1',
        [login]
    );
        if (responseLogin.rowCount < 1){
            res.status(200).send('Usuário não cadastrado');
        } else{
                var user = responseLogin.rows[0].login;
                const response = await db.query('SELECT * from usuario where login = $1 and senha = $2 ',
                    [user, senha]
                );
                if(response.rowCount < 1){
                    res.status(200).send('Senha incorreta');
                }else{
                    res.status(200).send('Logado com Sucesso!');

                }
              
        };
};
        
  