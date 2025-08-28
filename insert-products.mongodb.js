const database = "BD3-NoSQL-Produtos";

const collection = "bd3-nosql-atv7";

use(database);

//Inserção de produtos com campos requisitados
db[collection].insertMany(
    [
  {
    cod_produto: 1,
    nome_produto: "Mouse Gamer X200",
    desc_produto: "Mouse óptico com alta precisão, ideal para jogos.",
    valor: 129.90
  },
  {
    cod_produto: 2,
    nome_produto: "Teclado Mecânico RGB",
    desc_produto: "Teclado com switches mecânicos e iluminação RGB.",
    valor: 249.99
  },
  {
    cod_produto: 3,
    nome_produto: "Monitor 24'' Full HD",
    desc_produto: "Monitor LED de 24 polegadas com resolução 1080p.",
    valor: 899.99
  },
  {
    cod_produto: 4,
    nome_produto: "Cadeira Gamer Pro",
    desc_produto: "Cadeira ergonômica com ajuste de altura e apoio lombar.",
    valor: 1350.50
  },
  {
    cod_produto: 5,
    nome_produto: "Webcam Full HD",
    desc_produto: "Webcam com microfone embutido e qualidade 1080p.",
    valor: 199.90
  },
  {
    cod_produto: 6,
    nome_produto: "Headset Surround 7.1",
    desc_produto: "Fone com som surround e microfone removível.",
    valor: 349.90
  },
  {
    cod_produto: 7,
    nome_produto: "Notebook i7 16GB RAM",
    desc_produto: "Notebook com processador Intel Core i7 e 16GB de memória RAM.",
    valor: 4599.99
  },
  {
    cod_produto: 8,
    nome_produto: "HD Externo 1TB",
    desc_produto: "HD externo portátil com capacidade de 1 terabyte.",
    valor: 299.90
  },
  {
    cod_produto: 9,
    nome_produto: "SSD 512GB NVMe",
    desc_produto: "Unidade SSD com leitura ultrarrápida e tecnologia NVMe.",
    valor: 389.90
  },
  {
    cod_produto: 10,
    nome_produto: "Fonte 650W 80 Plus Bronze",
    desc_produto: "Fonte de alimentação com certificação de eficiência energética.",
    valor: 420.75
  }
]
)

