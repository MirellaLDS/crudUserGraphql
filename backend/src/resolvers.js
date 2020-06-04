const users = [
    { id: 1, name: 'Diego', email: 'diego@email.com' },
    { id: 2, name: 'Mirella', email: 'mirella@email.com' }
];

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    }
}