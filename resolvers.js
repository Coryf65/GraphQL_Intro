// creating a in memory Database for testing, will reset on starting the server
class Friend {
    constructor(id, { firstName, lastName, gender, language, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}

const FriendDatabase = {};

// resolver, function that returns the data from graphql
const resolvers = { 
    friend: () => {
        return {
            "id": 232342424,
            "firstName": "Matt",
            "lastName": "Heafy",
            "gender": "Male",
            "language": "English",
            "emails": [
                { email: "matt@email.com" }, 
                { email: "band@email.com" },
            ],
        }
    },

    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        FriendDatabase[id] = input;
        return new Friend(id, input);
    }
    
    
};
