const {Program} = require('../../models')

module.exports = {
    Query: {
        programs: async () => {
            return await Program.find({})
        }
    }

}