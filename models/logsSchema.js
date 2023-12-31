const mongoose = require('mongoose');
const Schema = mongoose.Schema
const model = mongoose.model

const logsSchema = new Schema({
    title:  { type: String, required: true},
    entry:  { type: String, required: true},
    shipIsBroken: Boolean,
});

const Logs = model('Logs', logsSchema);

module.exports = Logs;