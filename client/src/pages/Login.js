import { LoginForm } from "../components/LoginForm"
import { useAtom } from "jotai"
import { coinsAtom } from "./Home"

export const Login = () => {
  const [coins] = useAtom(coinsAtom)
  return (
    <div className="login"> 
      <h1>WELCOME TO STOCK TRACKER</h1>
      <h2>LOGIN OR CREATE AN ACCOUNT TO PROCEED</h2>
      <div className="login-form">
        <div className="login-form-container">
          <LoginForm />
        </div>
        {coins}
      </div>
      </div>
  )
}