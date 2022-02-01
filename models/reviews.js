const mongoose = require('mongoose')

// Create the results moodel
//
module.exports = mongoose.model('reviews', {
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  house: {
    type: String,
    required: true
  }
})
