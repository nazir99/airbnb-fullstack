// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.post('/', (req, res) => {
  res.send('This is bookings ')
})
// Export
module.exports = router
