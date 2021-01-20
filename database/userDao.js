const MongoClient = require('mongodb');
const { dbConnect } = require('./dbConnect');

module.exports.get = async (userId) => {
    const user = await dbConnect()
        .then(client => {
            const query = { '_id': MongoClient.ObjectId(userId) }
            return client.db(process.env.DB_NAME)
                .collection('user')
                .findOne(query);
        })
        .catch(error => console.error(error));

    return user;
};

module.exports.getAll = async () => {
    const users = dbConnect()
        .then(client => {
            return client.db(process.env.DB_NAME)
                .collection('user')
                .find()
                .toArray();
        })
        .catch(error => console.error(error));

    return await users;
};