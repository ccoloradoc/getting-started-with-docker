const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const os = require('os');
const app = express()
const port = 3000

const Attendance = require('./models/attendance');

mongoose.connect("mongodb://mongo:27017/list")

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.get('/attendance', (request, response) => {
  Attendance.find({}, { _id: 1, name: 1, age: 1} , (err, attendance) => {
    if (err) throw err;
    response.json({
      host: os.hostname(),
      attendance: attendance
    })
  });
})

app.post('/attendance', (request, response) => {
  var attendance  = new Attendance(request.body);

  attendance.save((err) => {
    if(err) throw err;
    response.json({
      host: os.hostname(),
      attendance: attendance
    });
  });
})


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
