const {Client} = require('../../models')

module.exports = {
    Query: {
        clients: async () => {
            return await Client.find({})
        }
    }
    

}