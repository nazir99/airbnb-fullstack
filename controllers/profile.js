// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  res.render('profile')
})

router.patch('/', (req, res) => {
  res.send('this is profile')
})
// Export
module.exports = router
