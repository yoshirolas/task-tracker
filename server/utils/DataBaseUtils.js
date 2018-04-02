const mongoose = require('mongoose');
const Task = require('../models/Task');
const config = require('../config');


function setUpConnection() {
  //`mongodb://${ config.db.host }:${ config.db.port }/${ config.db.name }`
  // mongodb://guest:guest12345@ds131914.mlab.com:31914/task-traker
  mongoose.connect(`mongodb://guest:guest12345@ds131914.mlab.com:31914/task-traker`);
  console.log('connected to DB')
}

function getTaskList() {
  return Task.find();
}

function addTask(data) {
  const task = new Task({
    title: data.title,
    description: data.description,
    priority: data.priority,
    complited: data.complited,
    date: new Date(),
  });

  return task.save();
}

function deleteTask(data) {
  return Task.findByIdAndRemove(data._id);
}

function changeTask(data) {
  const changedTask = {
    title: data.title,
    description: data.description,
    priority: data.priority,
    complited: data.complited,
  };

  return Task.findByIdAndUpdate(data._id, { $set: changedTask }, { new: true });
}


module.exports.setUpConnection = setUpConnection;
module.exports.getTaskList = getTaskList;
module.exports.addTask = addTask;
module.exports.changeTask = changeTask;
module.exports.deleteTask = deleteTask;