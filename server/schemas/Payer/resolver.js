const { Payer } = require("../../models")

module.exports = {
    Query: {
        payers: async () => {
            return await Payer.find({});
        },
        payer: async (parent, { _id }) => {
            return await Payer.findById(_id);
        }
    },

    Mutation: {
        addPayer: async (parent, { name, electronic_id, beginDate, endDate }) => {
            return await Payer.create(
                {
                    name,
                    electronic_id,
                    beginDate,
                    endDate
                });
        },
        updatePayer: async (parent, { _id, name, electronic_id, beginDate, endDate }) => {
            return await Payer.findByIdAndUpdate(
                _id,
                {$set:
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


