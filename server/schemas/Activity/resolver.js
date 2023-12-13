const { Activity } = require("../../models");

module.exports = {
  Query: {
    activities: async () => {
      return Activity.find({}).populate(
        [
          {path: 'payers'}, 
          {path: 'programs'}
        ]);
    },
    activity: async (parent, { activityId }) => {
      return Activity.findOne({ _id: activityId }).populate(
        [
          {path: 'payers'}, 
          {path: 'programs'}
        ]);
    },
  },
  Mutation: {
    addActivity: async (
      parent,
      { name, procedureCode, document, beginDate, endDate, programs, payers }
    ) => {
      return await Activity.create({
        name,
        procedureCode,
        document,
        beginDate,
        endDate,
        programs,
        payers,
      });
    },
    updateActivity: async (
      parent,
      {
        _id,
        name,
        procedureCode,
        document,
        beginDate,
        endDate,
        programs,
        payers,
      }
    ) => {
      return await Activity.findByIdAndUpdate(
        _id,
        { name, procedureCode, document, beginDate, endDate, programs, payers },
        { new: true }
      );
    },
    deleteActivity: async (
        parent,
        {_id}
        )=>{
            return Activity.findByIdAndDelete({_id})
        }
  },
};
