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
        supervisor_id: Employee
        startDate: DateTime
        endDate: DateTime
    }

    type EmpDemographics{
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
        demographics: EmpDemographics
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
    input EmpDemographicsInput{
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
            demographics: EmpDemographicsInput!, supervisors: SupervisorsInput
        ): Employee
        updateEmployee(
            _id: ID!, demographics: EmpDemographicsInput, supervisors: SupervisorsInput
        ): Employee
        deleteEmployee(_id: ID!): Employee

    }
`
