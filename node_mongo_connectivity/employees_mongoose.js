const express = require('express');
const app = express();
app.use(express.json());
const employeeModel = require('./employeeModel');
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/dec2023')

app.get('/', (req, res) => {
    res.send('<h1>Server Running....</h1>')
})
app.get('/employees', async (req, res) => {
    const employees = await employeeModel.find({});
    res.json(employees)
})
app.get('/employees/:id', async (req, res) => {
    empId = +req.params.id;
    const employee = await employeeModel.findOne({ eid: empId });
    res.json(employee)
})
app.post('/employees', async (req, res) => {
    try{
        const newEmp = new employeeModel(req.body);
        await newEmp.save();
        res.send('Employee Added Successfully')
    }catch(err){
        res.send(err.message)
    }
})
app.delete('/employees/:id', async (req, res) => {
    await employeeModel.deleteOne({ eid: +req.params.id });
    res.send('Employee Deleted Successfully')
})

app.listen(5000, () => {
    console.log('Server Runniing on port 5000');
})