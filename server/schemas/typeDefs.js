const typeDefs = `
  type Activity {
    _id: ID!
    name: String
    procedureCode: 
    document: 
    beginDate:
    endDate: 
    programs: [Program]
    payer: [Payer]
  }
  
  type Client {
    _id: ID!
    demographics: 
    insurance:
    programManagement:
  }

  type Employee {
    _id: ID!
    demographics:
    supervisors:
    startDate:
    endDate:

  }

  type Financial {
    _id: ID!
    client_id: [Client]
    staff_id: [Staff]
    activity_id: [Activity]
    procedure:
    fee:
    status:
    beginDate:
    endDate:

  }

  type Payer {
    _id: ID!
    name: String
    electronic_id: String
    beginDate:
    endDate:
  }

  type Program {
    _id: ID!
    name: String
    beginDate:
    endDate:
  }

  type Schedule {
    _id: ID!
    client_id: [Client]
    staff_id: [Staff]
    activity_id: [Activity]
    status: String
    beginDate:
    endDate:
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

  type Mutation {
    
  }
`;

module.exports = typeDefs;