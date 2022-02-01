// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile')
  } else {
    res.redirect('/auth/login')
  }
})

router.patch('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('this is patch profile')
  } else {
    res.redirect('/auth/login')
  }
})
// Export
module.exports = router
