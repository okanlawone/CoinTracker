import { useState } from "react"
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

 
export const CreateAccount = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",

  })

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/login', {
        login: false,
        name, email, password
      })
      if (data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success('Register Succesful. Please Login!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
      
    }

  }
  
return(
    
  <div className="create-account">
  <h2>Register</h2>
  <form onSubmit={registerUser}>
    <label className="form-label"> username: 
      <input type="text" placeholder="Username" value={data.name} onChange={(e) => setData({...data, name:e.target.value})} />
      </label>
      <label className="form-label"> email:    
          <input type="text" placeholder="email" value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}/>
      </label>
      <label className="form-label"> PASSWORD:
        <input type="password" placeholder="Password" value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
    </label>
    <input id="submit-button"type="submit"/> 
  </form>
</div>

)

}

