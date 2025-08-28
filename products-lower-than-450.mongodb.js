const database = "BD3-NoSQL-Produtos";

const collection = "bd3-nosql-atv7";

use(database);

db[collection].find({valor: {$lt: 450}})