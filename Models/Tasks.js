const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const taskSchema = new Schema({
    text: {
        type: String,
        required: true
    }
});

const Tasks = model('Tasks', taskSchema);

module.exports = Tasks;