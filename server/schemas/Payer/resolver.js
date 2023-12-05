const { Payer } = require('../../models')

module.exports = {
    Query: {
        payers: async () => {
            return await Payer.find({})
        },
        payers: async (parent, { payerId }) => {
            return await Payer.findByOne({ _id: payerId });
        }
    },

    Mutation: {
        addPayer: async (parent, { name, electronic_id }) => {
            return await Payer.create(
                {
                    name,
                    electronic_id,
                    beginDate,
                    endDate
                });
        },
        updatePayer: async (parent, { _id, name, electronic_id }) => {
            return await Payer.findByIdAndUpdate(
                _id,
                {
                    $set:
                    {
                        name,
                        electronic_id,
                        beginDate,
                        endDate
                    }
                },
                { new: true }

            )
        },
        removePayer: async (parent, { _id }) => {
            return await Payer.findByIdAndDelete({ _id });
        }
    }

}


