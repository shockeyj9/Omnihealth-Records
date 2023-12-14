const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    procedureCode: 
        {
            code: {
                type: String,
                required: true
            },
            fee: {
                type: Number,
                required: true
            }
        }
    ,
    document: [
        {
            name: {
                type:String
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
    programs: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Program',
        },
      ],
    payers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Payer'
        }
    ]
});

const Activity = model('Activity', activitySchema);

module.exports = Activity;