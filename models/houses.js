const mongoose = require('mongoose')

// Create the results moodel
//
module.exports = mongoose.model('houses', {
  description: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: {
      type: ObjectId,
      ref: 'user'
    }
  },
  location: {
    type: String,
    required: true
  },
  photos: [
    {
      title: String
    }
  ],
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: String,
    required: true
  },
  title: {
    type: Email,
    required: true
  }
})
