const { Employee } = require("../../models");

module.exports = {
    Query: {
        employees: async ()=>{
            return await Employee.find({}).populate(
                {path: 'supervisors.supervisor_id'}
                );
        },
        employee: async (parent,{_id})=>{
            return await Employee.findById(_id).populate(
                {path: 'supervisors.supervisor_id'}
                );
        },
    },
    Mutation: {
        addEmployee: async (
            parent,
            {demographics,supervisors}
        )=>{
            return await Employee.create({demographics,supervisors})
        },
        updateEmployee: async(
            parent,
            {_id, demographics,supervisors}
        )=>{
            return await Employee.findByIdAndUpdate(
                _id,
                {$set:
                    {
                        demographics: {...demographics},
                        supervisors: {...supervisors}
                    }
                },
                {new: true}
            )
        },
        deleteEmployee: async (
            parent,
            {_id}
            )=>{
                return Employee.findByIdAndDelete({_id})
            }
    }
}
