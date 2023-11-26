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
                // input field 
            },
            race: {
                type: String,
            },
            ethnicity: {
                type: String,
            },
            role: {
                // input field
            },
            contactInfo: [
                {
                    phone: {
                        type: Number,
                        // value
                    },
                    email: {
                        type: String,
                        // value
                    }
                }
            ],
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
        // ["SELF-REFERENCE EMPLOYEE MODEL FOR SUPERVISOR ObjectIds"],
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