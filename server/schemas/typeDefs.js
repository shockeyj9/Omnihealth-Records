const typeDefs = `
  type Activity {
    _id: ID!
    name: String
    programs: [Program]
    payer: [Payer]
  }

  type Demographics {
    _id: ID!
    name: String
  }

  type Client {
    _id: ID!
    demographics: Demographics
  }

  type Employee {
    _id: ID!
    demographics: Demographics
  }

  type Financial {
    _id: ID!
    client_id: [Client]
    staff_id: [Employee]
    activity_id: [Activity]
  }

  type Payer {
    _id: ID!
    name: String
    electronic_id: String
  }

  type Program {
    _id: ID!
    name: String
  }

  type Schedule {
    _id: ID!
    client_id: [Client]
    staff_id: [Employee]
    activity_id: [Activity]
    status: String
   
  }

  type Query {
    activity: [Activity]
    client: [Client]
    employee: [Employee]
    financial: [Financial]
    payer: [Payer]
    program: [Program]
    schedule: [Schedule] 
  }
`;

module.exports = typeDefs;