import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'



export default function Login() {



  const [loginData, setLoginData]= React.useState(
    {
      email: "",
      password: ""
    }
  )

  
  function handleChange  (event) {
    const {name,value, type, checked} = event.target
    setLoginData(prevLoginData=>{
      return {
        ...prevLoginData,
        [name] : type=== "checked" ? checked : value
      }
    })
  }
  
  function handleSubmit(event){
    event.preventDefault()
    console.log(loginData);
  }



  return (
    <div >
      <article className='article'>        
        <div className="login-section">

          <h4 className="header-title">login to your account</h4>
          <form onSubmit={handleSubmit}>

            <input type="email" 
              placeholder='Email'
              onChange={handleChange}
              name= "email"
              value={loginData.email}
            />

            <input type="password"
              placeholder='Password'
              onChange={handleChange}
              name="password"
              value={loginData.password}
            />

            <button className='login login-btn'>login</button>
          </form>

          <div className="extra-details">
            <small className='forgotten'><Link to={'/resetPassword'}> Have You Forgotten Your Details?</Link></small>
          </div>

        </div>


        <div className="signup-section">
          <div className="signup">
              <h4>NEED AN ACCOUNT?</h4>
              <Link to={"/SignupPage"} className='login signup-btn'>REGISTER</Link>
          </div>
        </div>

      </article>
    </div>
  )
}
