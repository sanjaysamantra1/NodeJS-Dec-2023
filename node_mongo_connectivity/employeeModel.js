const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    eid: { type: String, required: true },
    name: { type: String },
    sal: { type: Number },
    add: { type: String }
});
const employeeModel = mongoose.model('employees', employeeSchema);
module.exports = employeeModel;