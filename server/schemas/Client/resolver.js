const { Client, Payer } = require('../../models')


module.exports = {
    Query: {
        clients: async () => {
            return await Client.find({}).populate(
                [{path: 'insurance.payerId'},
                {path: 'programManagement.program_id'}]
                )
        },
        client: async (parent, {_id}) => {
            return await Client.findById(_id).populate(
                [{path: 'insurance.payerId'},
                {path: 'programManagement.program_id'}]
                );
        },
    },

    Mutation: {
        addClient: async (
            parent, 
            { demographics, insurance, programManagement }
            ) => {
            return await Client.create(
                {
                    demographics, 
                    insurance, 
                    programManagement
                })
        },
        updateClient: async (
            parent, 
            { _id, demographics, insurance, programManagement }
            ) => {
            return await Client.findByIdAndUpdate(
                 _id,
                {$set:
                    {
                        demographics: { ...demographics },
                        insurance: {...insurance},
                        programManagement: {...programManagement}
                    }
                },
                { new: true }
            )
        },
        removeClient: async (
            parent, 
            {_id}
            ) => {
            return Client.findByIdAndDelete({_id})
        }
    }

}
