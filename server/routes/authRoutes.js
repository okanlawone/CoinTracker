const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test, registerUser, loginUser } = require('../controllers/authController')


//middleware
router.use(
  cors({
    credentials:true,
    origin: 'http://localhost:3000'
  })
)

router.get('/', test)
// Use a single endpoint for both registration and login
router.post('/login', (req, res) => {
  if (req.body.login) {
    loginUser(req, res); // Call your loginUser function
  } else {
    registerUser(req, res); // Call your registerUser function
  }
});

module.exports = router