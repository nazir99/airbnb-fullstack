// Packages
const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  res.send('this is Auth')
})

// Export
module.exports = router
