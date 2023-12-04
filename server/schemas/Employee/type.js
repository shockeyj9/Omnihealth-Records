module.exports = `
scalar DateTime
  @specifiedBy(url: "https://scalars.graphql.org/andimarek/date-time")

    type ContactInfo{
        phone: String
        email: String
    }
    type Addresses{
        mailing: String
        physical: String
        startDate: DateTime
        endDate: DateTime
    }
    type Supervisors{
        supervisor_id: ID!
        startDate: DateTime!
        endDate: DateTime
    }

    type Demographics{
        name: String!
        dateOfBirth: DateTime!
        sex: String!
        gender: String
        race: String
        ethnicity: String
        role: String
        contactInfo: ContactInfo
        addresses: [Addresses]
    }

    type Employee{
        _id: ID!
        demographics: Demographics
        supervisors: [Supervisors]
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
        role: String
        contactInfo: ContactInfoInput
        addresses: AddressesInput
    }
    input SupervisorsInput{
        supervisor_id: ID
        startDate: DateTime
        endDate: DateTime
    }

    type Query{
        employees: [Employee]
        employee(_id: ID!): Employee
    }
    type Mutation{
        addEmployee(
            demographics: DemographicsInput!, supervisors: SupervisorsInput
        ): Employee
        updateEmployee(
            _id: ID!, demographics: DemographicsInput, supervisors: SupervisorsInput
        ): Employee
        deleteEmployee(_id: ID!): Employee

    }
`
