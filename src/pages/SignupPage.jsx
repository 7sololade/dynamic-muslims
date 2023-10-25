import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

export default function Signup() {

  const [signUpData, setSignUpData] = useState({

    email: "",
    password:"",
    repeatPassword:"",
    firstName:"",
    lastName:"",
    // country:"",
    address:"",
    // address2:"",
    city:"",
    // state:"",
    telephone:"",
    news: true,
    terms: false

  })

  function handleChange(event){
    const { name, value, type, checked  } = event.target
    setSignUpData(prevSignUpData=>{
      return{
        ...prevSignUpData,
        [name]: type=== "checkbox"? checked : value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(signUpData);
  }

  return (
    <div className='signupPage'> 
      <main className="main-signup">
        <div className="form-title">
          <h3>PERSONAL DETAILS</h3>
        </div>


        <form onSubmit={handleSubmit} className="signupForm" >

          <input 
            type="text"
            placeholder='First Name'
            name='firstName'
            onChange={handleChange}
            value={signUpData.firstName}
          />

          <input 
            type="text"
            placeholder='Last Name'
            name='lastName'
            onChange={handleChange}
            value={signUpData.lastName}
          />

          <input 
            type="email"
            placeholder='email'
            name='email'
            onChange={handleChange}
            value={signUpData.email}
            
          />

          <input 
            type="password"
            placeholder='password'
            name='password'
            onChange={handleChange}
            value={signUpData.password}

          />

          <input 
            type="password"
            placeholder='Repeat password'
            name='repeatPassword'
            onChange={handleChange}
            value={signUpData.repeatPassword}

          />




          <input 
            type="text" 
            placeholder='address'
            name='address'
            onChange={handleChange}
            value={signUpData.address}
          />


          <input 
            type="text" 
            placeholder='city/town'
            name='city'
            onChange={handleChange}
            value={signUpData.city}
          />

          <input 
            type="text"
            placeholder='telephone'
            name='telephone'
            onChange={handleChange}
            value={signUpData.telephone}
          />

          <button className='signup-Btn'>create account</button>

          <br />
          <br />
          

          <aside className="aside-login">
            <h6>already have an account?</h6>

            <div className="signin-link">
              <Link className='to-signin'  to="/login&signup" > SIGN IN </Link>
            </div>
          </aside>



          <div className="checkbox news">
            <input 
              type="checkbox"
              name='news'
              id='newsletter'
              onChange={handleChange}
              checked={signUpData.newsletter}          
            />
            <label htmlFor="newsletter"> JOIN OUR NEWSLETTER</label>
            <br />
          </div>

          <div className="checkbox terms">
            <input 
              type="checkbox" 
              name='terms'
              id='terms&condition'
              onChange={handleChange}
              checked={signUpData.terms}
            />
            <Link className='terms' to={"/terms&condition"}>
              <label htmlFor="terms&conditions">TERMS & CONDITIONS</label>
            </Link>
            <br />
          </div>
      </form>
    </main>
    </div>
  )
}



{/* <input 
  type="text" 
  placeholder='country'
  name='country'
  onChange={handleChange}
  value={signUpData.country}
/> */}


{/* <input 
  type="text" 
  placeholder='address 2'
  name='address2'
  onChange={handleChange}
  value={signUpData.address2}
/> */}

{/* <input 
type="text" 
placeholder='state'
name='state'
onChange={handleChange}
value={signUpData.state}
/> */}