const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const db = require('./utils/DataBaseUtils');


db.setUpConnection();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/tasks', function (req, res) {
  db.getTaskList().then(data => res.send(data))
});

app.put('/update', function (req, res) {
  db.changeTask(req.body).then(data => res.send(data))
});

app.post('/add', function (req, res) {
  db.addTask(req.body).then(data => res.send(data))
});

app.post('/delete', function (req, res) {
  db.deleteTask(req.body).then(data => res.send(data))
});

app.listen(config.serverPort, function () {
  console.log(`Server is listening on port ${ config.serverPort }!`);
});