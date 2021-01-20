const MongoClient = require('mongodb');
const { dbConnect } = require('./dbConnect');

module.exports.get = async (incomeId) => {
    const income = await dbConnect()
        .then(client => {
            const query = { '_id': MongoClient.ObjectId(incomeId) }
            return client.db(process.env.DB_NAME)
                .collection('income')
                .findOne(query);
        })
        .catch(error => console.error(error));

    return income;
};

module.exports.getAll = async () => {
    const incomes =
        await dbConnect()
            .then(client => {
                return client.db(process.env.DB_NAME)
                    .collection('income')
                    .find()
                    .toArray();
            })
            .catch(error => console.error(error));

    return incomes;
};