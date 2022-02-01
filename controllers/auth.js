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
  req.logout()
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.clearCookie('connect.sid')
    // continue coding here
    res.redirect('/auth/login')
  })
})

router.post('/login', async (req, res, next) => {
  try {
    let userWithEmailAndPasswordFound = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    console.log({ userWithEmailAndPasswordFound })

    if (userWithEmailAndPasswordFound) {
      req.login(userWithEmailAndPasswordFound, err => {
        if (err) {
          throw err
        }
        // continue coding here
        res.redirect('/houses')
      })
    } else {
      throw new Error('Incorrect Email and Password')
    }
  } catch (err) {
    next(err)
  }
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
