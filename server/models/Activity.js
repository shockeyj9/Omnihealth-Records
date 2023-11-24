const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    procedureCode: [
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
    ],
    document: [
        {
            // may need default objedt id if it isn't created
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