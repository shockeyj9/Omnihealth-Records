const {Program} = require('../../models')

module.exports = {
    Query: {
        programs: async () => {
            return await Program.find({})
        },
        program: async (parent, {_id}) => {
            return await Program.findById(_id);
        }
    },

    Mutation: {
        addProgram: async (parent, {name, beginDate, endDate}) => {
            return await Program.create(
                {
                    name, 
                    beginDate, 
                    endDate
                });
        },
        updateProgram: async (parent, {_id, name, beginDate, endDate}) => {
            return await Program.findByIdAndUpdate(
                _id,
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
            return await Program.findByIdAndDelete({_id});
        }
    
    }
}

