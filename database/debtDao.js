const MongoClient = require('mongodb');
const { dbConnect } = require('./dbConnect');
const { mapUserIdToUserFirstName } = require('./userUtils');

module.exports.get = async (debtId) => {
    const debt = dbConnect()
        .then(client => {
            const query = { '_id': MongoClient.ObjectId(debtId) }
            return client.db(process.env.DB_NAME)
                .collection('debt')
                .findOne(query);
        })
        .catch(error => console.error(error));

    return await debt;
};

module.exports.getAll = async () => {
    const debts = dbConnect()
        .then(client => {
            return client.db(process.env.DB_NAME)
                .collection('debt')
                .find()
                .toArray();
        })
        .catch(error => console.error(error));

    return await debts;
};