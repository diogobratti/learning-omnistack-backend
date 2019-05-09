
const mongoose = require('mongoose');

const File = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exportes = mongoose.model("File", File);