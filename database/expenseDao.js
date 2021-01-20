const MongoClient = require('mongodb');
const { dbConnect } = require('./dbConnect');
const _ = require('lodash');

module.exports.get = async (expenseId) => {
    const expense = await dbConnect()
        .then(client => {
            const query = { '_id': MongoClient.ObjectId(expenseId) }
            return client.db(process.env.DB_NAME)
                .collection('expense')
                .findOne(query);
        })
        .catch(error => console.error(error));

    return expense;
};

module.exports.getAll = async () => {
    try {
        const client = await dbConnect();
        return await client.db(process.env.DB_NAME)
            .collection('expense')
            .find()
            .toArray();
    } catch (error) {
        return console.error(error);
    }
};