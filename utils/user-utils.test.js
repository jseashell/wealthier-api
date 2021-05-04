// ./utils/user-utils.test.js

const { mapUserIdToUserFirstName } = require('./user-utils');

test('userUtils.mapUserIdToUserFirstName for exactly 1 doc', () => {
  const users = [
    {
      user_id: '1',
      name: 'user 1',
    },
    {
      user_id: '2',
      name: 'user 2',
    },
    {
      user_id: '3',
      name: 'user 3',
    },
  ];

  const document = {
    name: 'doc 2',
    user_id: '2',
  };

  const actual = mapUserIdToUserFirstName(document, users);

  const expected = {
    name: 'doc 2',
    userFirstName: 'user 2',
  };

  expect(actual).toStrictEqual(expected);
});

test('userUtils.mapUserIdToUserFirstName for 2+ docs', () => {
  const users = [
    {
      user_id: '1',
      name: 'user 1',
    },
    {
      user_id: '2',
      name: 'user 2',
    },
    {
      user_id: '3',
      name: 'user 3',
    },
  ];

  const documents = [
    {
      name: 'doc 1',
      user_id: '1',
    },
    {
      name: 'doc 2',
      user_id: '2',
    },
    {
      name: 'doc 3',
      user_id: '3',
    },
  ];

  const actual = mapUserIdToUserFirstName(documents, users);

  const expected = [
    {
      name: 'doc 1',
      userFirstName: 'user 1',
    },
    {
      name: 'doc 2',
      userFirstName: 'user 2',
    },
    {
      name: 'doc 3',
      userFirstName: 'user 3',
    },
  ];

  expect(actual).toStrictEqual(expected);
});
