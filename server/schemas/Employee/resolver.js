const { Employee } = require("../../models");

module.exports = {
    Query: {
        employees: async ()=>{
            return await Employee.find({});
        },
        employee: async (parent,{_id})=>{
            return await Employee.findById(_id);
        },
    }
}
