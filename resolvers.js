// creating a in memory Database for testing, will reset on starting the server
class Friend {
    constructor(id, { firstName, lastName, gender, age, language, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.language = language;
        this.email = email;
    }
}

const FriendDatabase = {};

// resolver, function that returns the data from graphql
const resolvers = { 

    getFriend: ({ id }) => {
        return new Friend(id, FriendDatabase[id]);
    },

    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        FriendDatabase[id] = input;
        return new Friend(id, input);
    }
    
};

export default resolvers;