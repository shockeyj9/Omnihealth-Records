module.exports = `
scalar DateTime
  @specifiedBy(url: "https://scalars.graphql.org/andimarek/date-time")
type Program {
    name: String!
    beginDate: DateTime!
    endDate: DateTime
}

type Query{
    programs: [Program]
}
`