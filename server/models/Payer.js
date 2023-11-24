const { Schema, model } = require('mongoose');

const payerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    electronic_id: {
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

const Payer = model('Payer', payerSchema);

module.exports = Payer;