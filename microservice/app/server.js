const express = require('express')
const os = require('os');
const app = express()
const port = 3000

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', (request, response) => {
  response.json({
    host: os.hostname(),
    attendance: [
      { name: 'Cristian Colorado', age: '32' },
      { name: 'Julen Ibarra', age: '25' },
      { name: 'Luis Yacuta', age: '25' },
      { name: 'Matt Rocha', age: '25' }
    ]
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
