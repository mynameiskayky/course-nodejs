CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
  "Kayky Vieira",
  "kaykyvieiraa@hotmail.com",
  20
);

INSERT INTO usuarios (nome, email, idade) VALUES 
('João', 'joao@gmail.com', 25),
('Maria', 'maria@gmail.com', 30),
('Pedro', 'pedro@hotmail.com', 20),
('Ana', 'ana@yahoo.com', 40),
('Lucas', 'lucas@gmail.com', 22),
('Julia', 'julia@yahoo.com', 27),
('Paulo', 'paulo@hotmail.com', 35),
('Mariana', 'mariana@gmail.com', 28),
('Fernando', 'fernando@yahoo.com', 33),
('Camila', 'camila@hotmail.com', 26),
('Gabriel', 'gabriel@gmail.com', 24),
('Amanda', 'amanda@yahoo.com', 29),
('Renato', 'renato@hotmail.com', 37),
('Carla', 'carla@gmail.com', 31),
('Diego', 'diego@yahoo.com', 23),
('Bianca', 'bianca@hotmail.com', 32),
('Ricardo', 'ricardo@gmail.com', 36),
('Isabela', 'isabela@yahoo.com', 21),
('Henrique', 'henrique@hotmail.com', 34),
('Leticia', 'leticia@gmail.com', 26);

UPDATE usuarios SET nome = "Rogerinho" WHERE nome = "Kayky Vieira";