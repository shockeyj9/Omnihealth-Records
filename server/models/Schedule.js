const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
    client_id: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Client',
        },
      ],
      staff_id: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Employee',
        },
      ],
      activity_id: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Activity',
        },
      ],
    status: {
        type: String,
    },
    beginDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    }
});

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;