const { Schema, model } = require('mongoose');


const financialSchema = new Schema({
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
  procedure: {

  },
  fee: {

  },
  status: {

  },
  beginDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  }
});

const Financial = model('Financial', financialSchema);

module.exports = Financial;