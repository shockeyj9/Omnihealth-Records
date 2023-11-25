const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
  demographics: [
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
            // input field 
        },
        race: {
            type: String,
        },
        ethnicity: {
            type: String,
        },
        occupation: {
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
        adresses: [
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
  Insurance: [
    {
        payers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Payer'
            }
        ],
        priority :{
            type: String,
        },
        subscriber: [
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
        ],
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
        program_id:[
            // default id? 
            {
              type: Schema.Types.ObjectId,
              ref: 'Program',
            },
          ],
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