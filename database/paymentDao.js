const MongoClient = require('mongodb');
const { dbConnect } = require('./dbConnect');

module.exports.get = async (paymentId) => {
    const payment = await dbConnect()
        .then(client => {
            const query = { '_id': MongoClient.ObjectId(paymentId) }
            return client.db(process.env.DB_NAME)
                .collection('payment')
                .findOne(query);
        })
        .catch(error => console.error(error));

    return payment;
};

module.exports.getAll = async () => {
    const payments =
        await dbConnect()
            .then(client => {
                return client.db(process.env.DB_NAME)
                    .collection('payment')
                    .find()
                    .toArray();
            })
            .catch(error => console.error(error));

    return payments;
};