const { Client } = require('../../models')

module.exports = {
    Query: {
        clients: async () => {
            return await Client.find({})
        },

        client: async (parent, { clientId }) => {
            return await Client.findbyOne({_id: clientId});
        }
    },

    Mutation: {
        addClient: async (parent, { demographics }) => {
            return await Client.create(demographics);
        },
        updateClient: async (parent, { _id, demographics }) => {
            return await Client.findOneAndUpdate(
                { _id },
                {
                    $set:
                    {
                        demographics: { ...demographics }
                    }
                },
                { new: true }

            )
        },
        removeClient: async (parent, {_id}) => {
            return await Client.findOneAndDelete(_id);
        }
    }

}
