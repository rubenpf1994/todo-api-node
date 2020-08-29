const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Titulo necesario']
    },

    description: {
        type: String
    },

    finishAt: {
        type: Date
    },

    reminderAt: {
        type: Date
    },

    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Task', taskSchema);