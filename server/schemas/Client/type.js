module.exports = `
    type Demographics {
        name: String
    }
    type Client{
        _id: ID!
        demographics: Demographics
    }

    type Query{
        clients: [Client]
    }
`
