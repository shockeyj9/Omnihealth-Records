module.exports = `
scalar DateTime
  @specifiedBy(url: "https://scalars.graphql.org/andimarek/date-time")

    type Demographics {
        name: String!
        dateOfBirth: DateTime!
        sex: String!
        gender: String
        race: String
        ethnicity: String
        occupation: String
        contactInfo: [ContactInfo]
        addresses: [Adresses]
    }
    
    type ContactInfo {
        phone: String
        email: String
    }

    type Insurance {
        payerId: Payer
        priority: String
        subscriber: Subscriber
        beginDate: DateTime!
        endDate: DateTime
    }

    type Subscriber {
        relationshipToPatient: String
        name: String!
        dateOfBirth: DateTime!
        adresses: [Adresses]
    }

    type Adresses {
        mailing: String
        physical: String
        startDate: DateTime
        endDate: DateTime
    }

    type Client{
        _id: ID!
        demographics: Demographics
    }

    type ProgramManagement{
        program_id: Program
        beginDate: DateTime!
        endDate: DateTime
    }

    type Query{
        clients: [Client]
        client(clientId: ID!): Client
    }

    type Mutation {
        addClient(clientId: ID!, demographics: Demographics)
        removeClient: Client
    }
`
