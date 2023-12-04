module.exports = `

type User{
    _id: ID!
    username: String!
    password: String!
    email: String!
}


type Query{
    users: [User]
    user(_id: ID!): User
}

type Mutation{
    addUser(username: String!, password:String!, email:     String!): User
    updateUser(_id: ID!, username: String!, password:String!, email:     String!): User
    deleteUser(_id: ID!): User
}

`