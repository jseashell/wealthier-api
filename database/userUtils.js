const _ = require('lodash');

/**
 * Maps the user_id field to a user's first name for all documents
 */
module.exports.mapUserIdToUserFirstName = (docs, users) => {
    if (Array.isArray(docs))
        return _.forEach(docs, (doc) => mapSingleUserIdToUserFirstName(doc, users));
    else
        return mapSingleUserIdToUserFirstName(docs, users);
}

function mapSingleUserIdToUserFirstName(doc, users) {
    const toLookup = doc.user_id.toString();
    const name = lookupFirstName(users, toLookup);

    doc.userFirstName = name;
    delete doc.user_id;

    return doc;
}

function lookupFirstName(users, userId) {
    return _(users)
        .filter(user => user._id.toString() === userId)
        .map(user => user.firstName)
        .first();
}