var express = require('express');
module.exports = class Usuario{
    constructor(nome, cpf, cargo, setor){
        this.nome = nome;
        this.cpf = cpf;
        this.cargo = cargo;
        this.setor = setor;
        function Cadastrar_Cliente(){

        };
        function Deletar_Cliente(){
            
        };
        function Alterar_Cliente(){
            
        };
    }
};

module.exports = class Aparelho{
    constructor(marca,modelo,obs){
        this.marca = marca;
        this.modelo = modelo;
        this.obs = obs;

        function Cadastrar_Aparelho(){

        };
        function Deletar_Aparelho(){
            
        };
        function Alterar_Aparelho(){
            
        };
    }
    
};

module.exports = class Contato{
    constructor(fone,celular,email){
        this.fone;
        this.celular;
        this.email;

        function Cadastrar_Contato(){

        };
        function Deletar_Contato(){
            
        };
        function Alterar_Contato(){
            
        };
    }
}

module.exports = class Aquisicao{
    constructor(motivo,obs){
        this.motivo = motivo;
        this.obs = obs;
        
        function Cadastrar_Aquisicao(){

        };
        function Deletar_Aquisicao(){
            
        };
        function Alterar_Aquisicao(){
            
        };
    }
}
