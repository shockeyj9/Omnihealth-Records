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
        contactInfo: ContactInfo
        addresses: [Addresses]
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
        addresses: [Addresses]
    }

    type Addresses {
        mailing: String
        physical: String
        startDate: DateTime
        endDate: DateTime
    }

    type ProgramManagement{
        program_id: Program
        beginDate: DateTime!
        endDate: DateTime
    }

    type Client{
        _id: ID!
        demographics: Demographics
        insurance: [Insurance]
        programManagement: [ProgramManagement]   
    }


    input ContactInfoInput{
        phone: String
        email: String
    }
    input AddressesInput{
        mailing: String
        physical: String
        startDate: DateTime
        endDate: DateTime
    }
    input DemographicsInput{
        name: String
        dateOfBirth: DateTime
        sex: String
        gender: String
        race: String
        ethnicity: String
        occupation: String
        contactInfo: ContactInfoInput
        addresses: AddressesInput
    }

    input InsuranceInput{
        payerId: ID
        priority: String
        subscriber: SubscriberInput
        beginDate: DateTime
        endDate: DateTime
    }

    input SubscriberInput{
        relationshipToPatient: String
        name: String
        dateOfBirth: DateTime
        addresses: AddressesInput
    }

    input ProgramManagementInput{
        program_id: ID
        beginDate: DateTime
        endDate: DateTime
    }

    type Query{
        clients: [Client]
        client(_id: ID!): Client
    }

    type Mutation {
        addClient(
            demographics: DemographicsInput!, insurance: InsuranceInput, programManagement: ProgramManagementInput
        ): Client
        updateClient(
            _id: ID!,  demographics: DemographicsInput!, insurance: InsuranceInput, programManagement: ProgramManagementInput
         ): Client
        removeClient(_id: ID!): Client 
    }
`
