const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    demographics: [
        {
            name: {
                type: String,
                required: true,
            },
            dateOfBirth: {
                type: Date,
                required: true,
            },
            sex: {
                type: String,
                required: true,
            },
            gender: {
                type: String,
            },
            race: {
                type: String,
            },
            ethnicity: {
                type: String,
            },
            role: {
                type: String,
            },
            contactInfo: 
                {
                    phone: {
                        type: String,
                    },
                    email: {
                        type: String,
                    }
                }
            ,
            addresses: [
                {
                    mailing: {
                        type: String,

                    },
                    physical: {
                        type: String,
                    },
                    startDate: {
                        type: Date,
                    },
                    endDate: {
                        type: Date,
                    },
                }
            ]
        }
    ],
    supervisors: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    }
});

const Employee = model('Employee', employeeSchema);

module.exports = Employee;