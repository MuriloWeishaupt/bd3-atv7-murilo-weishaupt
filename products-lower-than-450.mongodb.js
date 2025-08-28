const database = "BD3-NoSQL-Produtos";

const collection = "bd3-nosql-atv7";

use(database);

//Procura por produtos com valor menor que R$450.
db[collection].find({valor: {$lt: 450}})