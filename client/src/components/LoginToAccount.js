import { useState,  createContext, useContext } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../contexts/LoginContext"


export const LoginToAccount = () => {
  const { setLoggedIn } = useContext(LoginContext)
  const navigate = useNavigate()
  const [data, setData] = useState({
     email:"",
     password:"",
  })

  const loginUser = async (e) => {
    e.preventDefault() 
    const { email, password} = data
    try {
      const {data} = await axios.post('/login', {
        login: true,
        email, 
        password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        navigate('/')
        setLoggedIn(true)
      }
    } catch (error) {
      
    }
  }
  return (
    <div className="create-account">
      <h2>LOGIN</h2>
      <form onSubmit={loginUser}>
        <label className="form-label">   EMAIL: 
          <input type="text" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
          </label>
          <label className="form-label"> PASSWORD:
            <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        </label>
        <button id="login-button">LOGIN</button>
      </form>
    </div>
  )
}