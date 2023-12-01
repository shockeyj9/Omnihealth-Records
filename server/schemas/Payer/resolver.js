const {Payer} = require('../../models')

module.exports = {
    Query: {
        payers: async () => {
            return await Payer.find({})
        }
    }

}