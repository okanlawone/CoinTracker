import { useState } from "react"
import { CreateAccount } from "./CreateAccount"
import { LoginToAccount } from "./LoginToAccount"

export const LoginForm = () =>{
  const [newUser, setNewUser] = useState(false)

  const changeNewUserStatusTrue = () =>{
    setNewUser(true) 
  }
  const changeNewUserStatusFalse = () =>{
    setNewUser(false) 
  }
  return(
    <div className="container">
      <div className="login-buttons">
        <button onClick={changeNewUserStatusFalse} >LOGIN</button>
        <button onClick={changeNewUserStatusTrue}>CREATE ACCOUNT</button>
      </div>
      <div className="form">
          {newUser ? <CreateAccount /> : <LoginToAccount/>
            }
      </div>

    </div>
  )
}