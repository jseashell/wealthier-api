const MongoClient = require('mongodb');

module.exports.dbConnect = () => {
    return MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true });
}