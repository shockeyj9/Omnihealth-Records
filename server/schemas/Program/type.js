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
    program(_id: ID!): Program
  }
  
  type Mutation {
      addProgram(name: String!, beginDate: DateTime!, endDate: DateTime): Program
      updateProgram(_id:ID!, name: String!, beginDate: DateTime!, endDate: DateTime): Program
      removeProgram(_id: ID!): Program
  }

`