// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  res.send('this is houses')
})

router.get('/create', (req, res) => {
  res.send('this is houses')
})

router.get('/:id', (req, res) => {
  res.send('this is houses')
})

router.get('/:id:edit', (req, res) => {
  res.send('this is houses')
})

router.post('/', (req, res) => {
  res.send('This is bookings ')
})

router.patch('/:id', (req, res) => {
  res.send('This is bookings ')
})

router.delete('/:id', (req, res) => {
  res.send('This is bookings ')
})

// Export
module.exports = router
