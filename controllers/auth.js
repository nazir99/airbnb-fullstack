// Packages
const express = require('express')
const router = express.Router()

//Models
const Users = require('../models/users')

// Views
router.get('/', (req, res) => {
  res.send('this is Auth')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/logout', (req, res) => {
  res.send('this is Auth')
})

router.post('/login', async (req, res) => {
  // console.log(req.body.search)
  // const results = await Results.find({})
  // await console.log(results)
  // res.render('results', { results })
})

router.post('/signup', async (req, res, next) => {
  try {
    // code here
    // 1 check that user is not in db
    let foundUser = await Users.findOne({ email: req.body.email })
    console.log({ foundUser })
    if (foundUser) {
      throw new Error(
        'User with this email already exists, please use another email'
      )
    } else {
      let user = await Users.create(req.body)
      // LOG user
      console.log({ user })
      // if user
      // 1. login
      // 2. redirect
      // else
      // throw error
      req.login(user, err => {
        if (err) {
          throw err
        }
        // continue coding here
        res.redirect('/houses')
      })
    }

    // errors
    // throw new Error('message')
  } catch (err) {
    next(err)
  }
})

// Export
module.exports = router
