create database PlazzaTenis;

use PlazzaTenis;




INSERT INTO ProdutosTenis (nome, marca, modelo, preco, tamanho, cor, estoque, descricao)
VALUES 
('Air Max', 'Nike', '2024', 799.99, 42, 'Preto', 10, 'Tênis confortável e estiloso.'),
('Ultraboost', 'Adidas', '2024', 899.99, 40, 'Branco', 15, 'Ideal para corridas e caminhadas.'),
('Fuelcell Supercomp Trainer V2', 'New Balace', '2024', 750.00, 44, 'Azul', 20, 'Excelente amortecimento e suporte.');



create table CadastrosDosUsuarios(
	usuarios_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (30) NOT NULL,
    senha VARCHAR (30) NOT NULL
);

create table Carrinho(
	carrinho_id INT AUTO_INCREMENT PRIMARY KEY,
    produtos_id INT,
    usuarios_id INT,
    FOREIGN KEY (usuarios_id) REFERENCES CadastrosDosUsuarios(usuarios_id),
    FOREIGN KEY (produtos_id) REFERENCES ProdutosTenis(produtos_id)
);

create table Checkout (
	chekout_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (50) NOT NULL,
    email VARCHAR (50) NOT NULL,
    telefone INT (50) NOT NULL,
    endereco VARCHAR (50) NOT NULL,
    numero CHAR (13) NOT NULL,
    complemento TEXT NOT NULL, 	
	cidade TEXT NOT NULL,
    cep INT NOT NULL,
    formaDePagamento FLOAT (10, 2) NOT NULL,
	numeroDoCartao INT NOT NULL,
    nomeDoCartao TEXT NOT NULL,
    cvv INT NOT NULL,
    dataDeValidade INT NOT NULL,
    cupom CHAR (10)
);









