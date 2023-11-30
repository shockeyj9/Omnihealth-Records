const { Activity, Client, Employee, Financial, Payer, Program, Schedule } = require('../models');


const resolvers = {
    Query: {
        client: async () => {
          return await Client.find({})
        }
      }
}



module.exports = resolvers;