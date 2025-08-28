const database = "BD3-NoSQL-Produtos";

const collection = "bd3-nosql-atv7";

use(database);


//Procura por produtos com valor maior ou igual a R$500 E menor ou igual a R$950.
db[collection].find({$and:[
    {valor: {$gte: 500}},
    {valor: {$lte: 950}},
]})