create table usuario(
	idusuario bigserial primary key not null,
	nome varchar(80) not null,
	cpf varchar (20) not null,
	cargo varchar(20),
	setor varchar(20)
);

create table aparelho(
	idaparelho bigserial primary key not null,
	marca varchar(30),
	modelo varchar(30),
	obs varchar(120)
);

create table aquisicao(
	idaquisicao bigserial primary key,
	motivo varchar(120),
	fk_usuario int,
	fk_aparelho int,
	
	constraint fk_usuario foreign key(fk_usuario) references usuario(idusuario),
	constraint fk_aparelho foreign key(fk_aparelho) references aparelho(idaparelho)
);

create table contato(
	idcontato bigserial primary key not null,
	fone varchar(12),
	celular varchar(14),
	email varchar(40),
	fk_usuario int not null,

	constraint fk_usuario foreign key(fk_usuario) references usuario(idusuario) 
);
