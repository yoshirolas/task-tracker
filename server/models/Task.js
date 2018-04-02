const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  date: { type: Date },
  priority: { type: String },
  complited: { type: Boolean },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;