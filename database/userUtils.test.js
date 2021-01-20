const MongoClient = require('mongodb');
const { mapUserIdToUserFirstName } = require('./userUtils');

test('userUtils.mapUserIdToUserFirstName for exactly 1 doc', () => {
    const users = [{
        _id: MongoClient.ObjectId('5ff9dd2f03a6107fda6eb248'),
        firstName: 'user 1'
    }, {
        _id: MongoClient.ObjectId('5ff9d24e03a6107fda6eb22c'),
        firstName: 'user 2'
    }, {
        _id: MongoClient.ObjectId('5ff9dd7502898a3e7068098c'),
        firstName: 'user 3'
    }];

    const document = {
        name: 'doc 2',
        user_id: MongoClient.ObjectId('5ff9d24e03a6107fda6eb22c')
    };

    const actual = mapUserIdToUserFirstName(document, users);

    const expected = {
        name: 'doc 2',
        userFirstName: 'user 2'
    };

    expect(actual).toStrictEqual(expected);
});

test('userUtils.mapUserIdToUserFirstName for 2+ docs', () => {
    const users = [{
        _id: MongoClient.ObjectId('5ff9dd2f03a6107fda6eb248'),
        firstName: 'user 1'
    }, {
        _id: MongoClient.ObjectId('5ff9d24e03a6107fda6eb22c'),
        firstName: 'user 2'
    }, {
        _id: MongoClient.ObjectId('5ff9dd7502898a3e7068098c'),
        firstName: 'user 3'
    }];

    const documents = [{
        name: 'doc 1',
        user_id: MongoClient.ObjectId('5ff9dd2f03a6107fda6eb248')
    }, {
        name: 'doc 2',
        user_id: MongoClient.ObjectId('5ff9d24e03a6107fda6eb22c')
    }, {
        name: 'doc 3',
        user_id: MongoClient.ObjectId('5ff9dd7502898a3e7068098c')
    }];

    const actual = mapUserIdToUserFirstName(documents, users);

    const expected = [{
        name: 'doc 1',
        userFirstName: 'user 1'
    }, {
        name: 'doc 2',
        userFirstName: 'user 2'
    }, {
        name: 'doc 3',
        userFirstName: 'user 3'
    }];

    expect(actual).toStrictEqual(expected);
});