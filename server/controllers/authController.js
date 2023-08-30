const { hashPassword, comparePassword } = require('../helpers/auth')
const User = require('../models/user')

//Register Endpoint
 const registerUser = async (req, res) =>{
  try {
    const {name, email, password} = req.body
    //Check if name was entered
    if (!name){
      return res.json({
        error:'name is required'
      })
    }
    //Check if password is good
    if (!password || password.length < 6 ){
      return res.json({
        error: 'Password is required and must be at least six characters'
      })
    }

    //Check email
    const exist = await User.findOne({email})

    if (exist){
      return res.json({
        error:'Email is already taken'
      })
    }

    const hashedPassword = await hashPassword(password)


    //  Create user in database
    const user = await User.create({
      name, 
      email,
      password: hashedPassword,
    })

    return res.json(user)
  } catch (error) {
    console.log(error)
    
  }

}

const test =  (req, res) => {
    res.json('test is working')
}

//Login Endpoint 

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body
    
    //Check if user exists

    const user = await User.findOne({email})
    if(!user ){
      return res.json({
        error: "No user found"
      })
    }
    // Check Password
    const match = await comparePassword(password, user.password)
    if (match) {
      res.json("Passwords match")

    }
  } catch (error) {
    console.log(error)
  }

}


module.exports = {
  test,
  registerUser,
  loginUser
}