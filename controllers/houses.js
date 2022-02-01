// Packages
const express = require('express')
const router = express.Router()

// Views
// Create here a controller that accepts GET requests and renders the "search" page
router.get('/', (req, res) => {
  res.render('houses/list')
})

router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create')
  } else {
    res.redirect('/auth/login')
  }
})

router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/one')
  } else {
    res.redirect('/auth/login')
  }
})

router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/edit')
  } else {
    res.redirect('/auth/login')
  }
})

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('/')
  } else {
    res.redirect('/auth/login')
  }
})

router.patch('/:id', (req, res) => {
  res.send('This is bookings ')
})

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('This is bookings ')
  } else {
    res.redirect('/auth/login')
  }
})

// Export
module.exports = router
