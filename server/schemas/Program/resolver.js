const {Program} = require('../../models')

module.exports = {
    Query: {
        programs: async () => {
            return await Program.find({})
        },
        programs: async (parent, {programId}) => {
            return await Program.findByOne({_id: programId});
        }
    },

    Mutation: {
        addPayer: async (parent, {name}) => {
            return await Program.create(name);
        },
        updatePayer: async (parent, {_id, name}) => {
            return await Program.findOneAndUpdate(
                {_id},
                {
                    $set:
                    {
                        name,
                        beginDate,
                        endDate
                    }
                },
                    {new: true }

            )
        },
        removeProgram: async (parent, {_id}) => {
            return await Program.findOneAndDelete(_id);
        }
    
    }
}

