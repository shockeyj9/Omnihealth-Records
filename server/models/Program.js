const { Schema, model } = require('mongoose');

const programSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    beginDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    }
});

const Program = model('Program', programSchema);

module.exports = Program;