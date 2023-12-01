const {Activity} = require('../../models')

module.exports = {
    Query: {
        activities: async ()=>{
            return Activity.find({})
        },
        activity: async (parent,{activityId})=>{
            return Activity.findOne({_id: activityId})
        }
    },
    Mutation: {
        addActivity: async (parent,{
            name,
            procedureCode,
            document,
            beginDate,
            endDate,
            programs,
            payers
        })=>{
            return Activity.create({
                name,
                procedureCode,
                document,
                beginDate,
                endDate,
                programs,
                payers
            })
        }
    }

}