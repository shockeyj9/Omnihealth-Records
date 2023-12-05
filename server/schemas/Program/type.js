module.exports = `
scalar DateTime
  @specifiedBy(url: "https://scalars.graphql.org/andimarek/date-time")

type Program {
    _id: ID!
    name: String!
    beginDate: DateTime!
    endDate: DateTime
}

type Query{
    programs: [Program]
    program(programId: ID!): Program
  }
  
  type Mutation {
      addProgram(programId: ID!, name: String!, beginDate: DateTime!, endDate: DateTime)
      removeProgram: Program
  }
}
`