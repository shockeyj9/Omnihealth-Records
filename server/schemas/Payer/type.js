module.exports = `
scalar DateTime
  @specifiedBy(url: "https://scalars.graphql.org/andimarek/date-time")

    type Payer{
        _id: ID!
        name: String!
        electronic_id: String
        beginDate: DateTime!
        endDate: DateTime
    }

    type Query{
        payers: [Payer]
        payer(payerId: ID!): Payer
    }
    
    type Mutation {
        addPayer(name: String!, electronic_id: String, beginDate: DateTime!, endDate: DateTime): Payer
        updatePayer(name: String!, electronic_id: String, beginDate: DateTime!, endDate: DateTime): Payer
        removePayer(_id: ID!): Payer
    } 
`