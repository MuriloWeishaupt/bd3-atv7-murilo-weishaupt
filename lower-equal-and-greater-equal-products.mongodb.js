const database = "BD3-NoSQL-Produtos";

const collection = "bd3-nosql-atv7";

use(database);

db[collection].find({$and:[
    {valor: {$gte: 500}},
    {valor: {$lte: 950}},
]})