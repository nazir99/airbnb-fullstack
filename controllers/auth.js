// Packages
const express = require('express')
const router = express.Router()

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

router.post('/signup', async (req, res) => {
  console.log(req.body)
  // const results = await Results.find({})
  // await console.log(results)
  // res.render('results', { results })
})
// Export
module.exports = router
