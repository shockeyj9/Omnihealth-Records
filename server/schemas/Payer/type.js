module.exports = `
    type Payer{
        _id: ID!
        name: String
    }

    type Query{
        payers: [Payer]
    }
`