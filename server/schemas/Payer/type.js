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
    }
`