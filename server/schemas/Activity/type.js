module.exports = `
scalar DateTime
  @specifiedBy(url: "https://scalars.graphql.org/andimarek/date-time")

    type Procedure{
        code: String
        fee: Float
    }

    type Document{
        name: String
    }
    type PayerRef{
        _id: ID
    }
    type ProgramRef{
        _id: ID
    }

    type Activity {
        _id: ID!
        name: String
        procedureCode: Procedure
        document: [Document]
        beginDate: DateTime!
        endDate: DateTime
        programs: [ProgramRef]
        payers: [PayerRef]
    }
    input ProcedureInput{
        code: String
        fee: Float
    }
    input DocumentInput{
        name: String
    }
    input PayerInput{
        _id: ID!
    }
    input ProgramInput{
        _id: ID!
    }


    type Query{
        activities: [Activity]
        activity(activityId: ID!): Activity
    }
    type Mutation{
        addActivity(name: String!, procedureCode:ProcedureInput!, 
            document: DocumentInput, beginDate: DateTime!, endDate: DateTime, 
            programs: [ProgramInput],payers: [PayerInput]): Activity
        updateActivity(_id: ID!,name: String, procedureCode:ProcedureInput, 
            document: DocumentInput, beginDate: DateTime, endDate: DateTime, 
            programs: [ProgramInput],payers: [PayerInput]): Activity
        deleteActivity(_id: ID!): Activity
    }   

`
