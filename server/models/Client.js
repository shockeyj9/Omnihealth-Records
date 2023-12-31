const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
  demographics: 
    {
        name : {
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
        occupation: {
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
            },
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
  ,
  insurance: [
    {
        payerId: 
            {
                type: Schema.Types.ObjectId,
                ref: 'Payer'
            }
        ,
        priority :{
            type: String,
        },
        subscriber: 
            {
                relationshipToPatient: {
                    type: String,
                },
                name: {
                    type: String,
                    required: true,
                },
                dateOfBirth: {
                    type: Date,
                    required: true,
                },
                address: {
                    mailing: {
                        type: String,
    
                    },
                    physical: {
                        type: String,
                    },
                }
            }
        ,
        beginDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
        },
    }
  ],
  programManagement: [
    {
        program_id:
            {
              type: Schema.Types.ObjectId,
              ref: 'Program',
            },
        beginDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
        }  
    }
  ]
});

const Client = model('Client', clientSchema);

module.exports = Client;